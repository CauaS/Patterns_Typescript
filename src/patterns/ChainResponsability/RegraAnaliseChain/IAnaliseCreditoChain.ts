import { ERisco } from "../../../analiseCredito/ERisco";


export interface IAnaliseCreditoChain {
    AdicionaProximaRegra(proximaRegra: IAnaliseCreditoChain): IAnaliseCreditoChain,
    Executar(valor: number) : ERisco;
}