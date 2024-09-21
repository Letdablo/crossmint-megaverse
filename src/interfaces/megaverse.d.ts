



interface IPolyanet {
    row: number;
    column: number;
}


interface ISoloon extends IPolyanet {
  color: "blue" | "red" | "purple" | "white";
}

interface ICometh extends IPolyanet {
  direction: "up" | "down" | "right" | "left";
}


interface AstralObject {
  type: AstralObjects; 
}



interface ResultAstralCreate {
  code: number; 
  row: number;
  column: number;
  type: AstralObjects; 
}


interface AstralGrid {
  goal: AstralObject[][]; 
}

export type { IPolyanet, ISoloon, ICometh, ICoordinates, AstralObject, AstralGrid, ResultAstralCreate }