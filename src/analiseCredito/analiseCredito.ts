import { ERisco } from "./ERisco"
import { RegraAnaliseCreditoFactory } from "../patterns/ChainResponsability/RegraAnaliseChain/RegraAnaliseCreditoFactory"

export default class AnaliseCredito {
    constructor(){ }

    public analisar(valor: number): ERisco{
        if(valor <= 10) {
            return ERisco.A
        }else if(valor <= 50 ){
            return ERisco.B
        }else if(valor <= 100){
            return ERisco.C
        }else if(valor <= 200){
            return ERisco.D
        } return ERisco.D
    }

    public analiseComChain(valor: number) {
        var regras = new RegraAnaliseCreditoFactory().Create();
        
        return regras.Executar(valor);
    }
}