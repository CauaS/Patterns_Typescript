import { ERisco } from "../../../../analiseCredito/ERisco";
import RegraAnaliseCreditoAbstract from "../RegraAnaliseCreditoChain";

export class PrimeiraRegra extends RegraAnaliseCreditoAbstract {
       
    constructor(){
        super();
    }

    Executar(valor: number): ERisco {
        if(this.MenorIgualA10(valor)) return ERisco.A
        return super.Executar(valor)
    }

    public MenorIgualA10(valor: number){
        if(valor <= 10) return true
  }
}

export class SegundaRegra extends RegraAnaliseCreditoAbstract {
       
    constructor(){
        super();
    }
    
    Executar(valor: number): ERisco {
        if(this.MenorIgualA50(valor)) return ERisco.B
        return super.Executar(valor)
    }

    public MenorIgualA50(valor: number){ 
        if(valor <= 50) return true
    }
}

export class TerceiraRegra extends RegraAnaliseCreditoAbstract {
       
    constructor(){
        super();
    }
    
    Executar(valor: number): ERisco {
        if(this.MenorIgualA100(valor)) return ERisco.C
        return super.Executar(valor)
    }

    public MenorIgualA100(valor: number){ 
        if(valor <= 100) return true
    }
}

export class QuartaRegra extends RegraAnaliseCreditoAbstract {
       
    constructor(){
        super();
    }
    
    Executar(valor: number): ERisco {
        if(this.MenorIgualA200(valor)) return ERisco.D
        return super.Executar(valor)
    }

    public MenorIgualA200(valor: number){ 
        if(valor <= 200) return true
    }
}