import RegraAnaliseCreditoAbstract from "./RegraAnaliseCreditoChain";
import { PrimeiraRegra, SegundaRegra, TerceiraRegra, QuartaRegra } from "./Regras/Regras";

export class RegraAnaliseCreditoFactory {
    private readonly primeiraRegra: PrimeiraRegra;
    private readonly segundaRegra: SegundaRegra;
    private readonly terceiraRegra: TerceiraRegra;
    private readonly quartaRegra: QuartaRegra;

    constructor(){
        this.primeiraRegra = new PrimeiraRegra();
        this.segundaRegra = new SegundaRegra();
        this.terceiraRegra = new TerceiraRegra();
        this.quartaRegra = new QuartaRegra();
    }

    public Create(): RegraAnaliseCreditoAbstract {
        var regraInicial = this.primeiraRegra;

        regraInicial
            .AdicionaProximaRegra(this.segundaRegra)
            .AdicionaProximaRegra(this.terceiraRegra)
            .AdicionaProximaRegra(this.quartaRegra)

        return regraInicial;
    }
}
