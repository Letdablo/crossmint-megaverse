
import type { IPolyanet, ICometh, ISoloon, AstralObject, AstralGrid, ResultAstralCreate } from '@/interfaces/megaverse'
import {AstralObjects} from "@/interfaces/meragverse.enums";
import axios from 'axios';
export class Megaverse {
    private readonly baseUrl: string = process.env.baseUrl || "";
    private readonly candidateId: string = process.env.candidateID || "";

    constructor() {
    }

    private async post(endpoint: string, body: IPolyanet, type: AstralObjects):Promise<ResultAstralCreate> {
       return await axios.post(`${this.baseUrl}${endpoint}`, {
           ...body,
            candidateId: this.candidateId 
        }).then(function () {
            const result:ResultAstralCreate= {code:1, row: body.row, column:body.column, type }
            return result
        }).catch(function (error) {
            console.error('Error:'+error.response.status);
            console.error(`${endpoint}:  x:${body.column} y:${body.row} `);
            const result:ResultAstralCreate= {code:-1, row: body.row, column:body.column, type }
            return result
        })
    }

    private async delete(endpoint: string, body: IPolyanet, type: AstralObjects):Promise<ResultAstralCreate> {
        return await axios.delete(`${this.baseUrl}${endpoint}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            data: {row: body.row, column:body.column, candidateId: this.candidateId },
        }).then(function () {
            const result:ResultAstralCreate= {code:1, row: body.row, column:body.column, type }
            return result
        }).catch(function (error) {
            console.log('Error:'+error.response.status);
            const result:ResultAstralCreate= {code:1, row: body.row, column:body.column, type }
            return result
        })

    }

    async getAstralGrid(){
        const astralGrid:AstralGrid={goal:[[]]}
        try {
            const response = await axios.get(`https://challenge.crossmint.com/api/map/${this.candidateId}/goal`);
            astralGrid.goal= response.data.goal.map((row: string[]) => row.map(type => ({ type } as AstralObject)) );
            return astralGrid
        } catch (error) {
            console.error('Error fetching the grid:', error);
            return astralGrid
        }
    }

    async createPolyanet(position: IPolyanet, type:AstralObjects) {
        return this.post("polyanets", position, type);
    }

    async deletePolyanet(position: IPolyanet, type:AstralObjects):Promise<ResultAstralCreate> {
        return this.delete("polyanets", position, type);
    }

    async createSoloon(soloon: ISoloon, type:AstralObjects):Promise<ResultAstralCreate>  {
        return this.post("soloons", soloon, type);
    }

    async deleteSoloon(position: IPolyanet, type:AstralObjects):Promise<ResultAstralCreate> {
        return this.delete("soloons", position, type);
    }

    async createCometh(cometh: ICometh, type:AstralObjects):Promise<ResultAstralCreate> {
        return this.post("comeths", cometh, type);
    }

    async deleteCometh(position: IPolyanet, type:AstralObjects):Promise<ResultAstralCreate> {
        return this.delete("comeths", position, type);
    }

}