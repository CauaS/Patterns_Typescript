import { ERisco } from "../../../analiseCredito/ERisco";
import { IAnaliseCreditoChain } from "./IAnaliseCreditoChain";

export default class RegraAnaliseCreditoAbstract implements IAnaliseCreditoChain {
    private _proximaRegra: IAnaliseCreditoChain;

    public AdicionaProximaRegra(proximaRegra: IAnaliseCreditoChain): IAnaliseCreditoChain {
        this._proximaRegra = proximaRegra;
        return proximaRegra;
    }
    
    public Executar(valor: number): ERisco {
        return this._proximaRegra != null 
            ? this._proximaRegra.Executar(valor)
            : ERisco.E;
    }

}