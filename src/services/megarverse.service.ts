
import {Megaverse} from "@/models/megaverse.model";
import type { AstralGrid, AstralObject, ResultAstralCreate } from "@/interfaces/megaverse";
import {AstralObjects} from "@/interfaces/meragverse.enums";
import { delay} from "@/app/utils/utils";


const  createPolyanetsCross = async (min: number, max:number, total:number ) => {
   "use server";
    const api = new Megaverse();
    for (let i = min; i < max; i++) {
      // Crea un Polyanet donde x === y (diagonal)
      const firstDiagonalPromise = api.createPolyanet({ row: i, column: i }, AstralObjects.POLYANET );
      // Crea un Polyanet donde x + y === total (segunda diagonal)
      const columnForSecondDiagonal = (total-1) - i;
      const secondDiagonalPromise = api.createPolyanet({ row:i, column: columnForSecondDiagonal }, AstralObjects.POLYANET);
      await Promise.all([firstDiagonalPromise, secondDiagonalPromise]);
    }

};

const createFullMegaverse = async () => {
   "use server";
    const api = new Megaverse();
    const errors: ResultAstralCreate[]=[];
    const {goal}:AstralGrid = await api.getAstralGrid();
    if (goal.length > 0) {
        for (let x = 0; x < goal.length; x++) {
          const promises:Promise< ResultAstralCreate | null>[]=[]
          for (let y = 0; y < goal[x].length; y++) {
            const astralObject:AstralObject = goal[x][y];
            promises.push(createAstralObjects(astralObject, x, y, api));
          }
            console.log(`Processing row: ${x+1}/${goal.length}`)
            const results=await Promise.all(promises);
            results.forEach(result=>{
              if(result!=null && result.code==-1 ) errors.push(result)
            })
            await delay(10000)
        }
      }
      await reProcesingAstralObjects(errors,api)
    
};

const createAstralObjects=async (astralObjects:AstralObject ,row: number, column:number , api:Megaverse):Promise<ResultAstralCreate | null> =>{

  switch (astralObjects.type) {
      case AstralObjects.SPACE:
         return new Promise(resolve => resolve(null));
       
      case AstralObjects.POLYANET:
         return api.createPolyanet({ row, column}, astralObjects.type);
        
      case AstralObjects.BLUE_SOLOON:
         return api.createSoloon({ row, column, color:"blue"}, astralObjects.type);
        
      case AstralObjects.RED_SOLOON:
         return api.createSoloon({ row, column, color:"red"}, astralObjects.type);
        
      case AstralObjects.PURPLE_SOLOON:
         api.createSoloon({ row, column, color:"purple"}, astralObjects.type);
        
      case AstralObjects.WHITE_SOLOON:
         return api.createSoloon({ row, column, color:"white"}, astralObjects.type);
        
      case AstralObjects.UP_COMETH:
          return api.createCometh({ row, column, direction:"up"}, astralObjects.type);
         
      case AstralObjects.DOWN_COMETH:
         return api.createCometh({ row, column, direction:"down"}, astralObjects.type);
        
      case AstralObjects.LEFT_COMETH:
         return api.createCometh({ row, column, direction:"left"}, astralObjects.type);
        
      case AstralObjects.RIGHT_COMETH:
         return api.createCometh({ row, column, direction:"right"}, astralObjects.type);
        
      default:
        return new Promise(resolve => resolve(null));
    }
}

 const reProcesingAstralObjects =async (astralObjects:ResultAstralCreate[], api:Megaverse) => {
    if(astralObjects.length===0) {
      console.log('task completed')
      return
    }
     console.log(`errors: ${astralObjects.length}`)
    const errors: ResultAstralCreate[]=[];
    for (let x = 0; x < astralObjects.length; x++) {
      const astralObject=astralObjects[x]
      const result=await createAstralObjects(astralObject.type,astralObject.row,astralObject.column, api)
      if(result!=null && result.code==-1 ) errors.push(result)
      await delay(1000)
    }
    await reProcesingAstralObjects(errors,api) //hasta que no queden errores
}

export  {createPolyanetsCross,createFullMegaverse};