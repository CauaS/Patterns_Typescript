import { ERisco } from "../analiseCredito/ERisco";
import AnaliseCredito from "../analiseCredito/analiseCredito";
import { Cliente } from "../cliente/Cliente";

export class Pedido {
    public valor: number

    constructor(valor: number){
        this.valor = valor
    }

    efetivarVendaSemChain(): Boolean {
        return new AnaliseCredito().analisar(this.valor) == (ERisco.A || ERisco.B || ERisco.C);
    }

    efetivarVendaComChain(): Boolean {
        return new AnaliseCredito().analiseComChain(this.valor);;
    }
}