import { ClienteBuilder } from "./patterns/builder/ClienteBuilder";
import { Cliente } from "./cliente/Cliente";
import { EmailService } from "./cliente/EmailService";
import { ModelS, AutoPilot, AirBags } from "./patterns/decorator";
import { Pedido } from "./pedido/pedidoDeVenda";


// Decorator
let myCar = new ModelS();
myCar = new AutoPilot(myCar);
myCar = new AirBags(myCar);

console.log(myCar.cost());
console.log(myCar.getDescription());
console.log(myCar.getDescription());


// Builder
// ! Criando uma instancia de Cliente sem builder.
const cliente0 = new Cliente(
    new EmailService(), 
    "Caligiuri", 
    "email@gmail.com");

// * Criado uma instancia de Cliente com builder
const cliente2 = new ClienteBuilder()
                        .comNome("Claudia")
                        .builder();


//Chain Responsability

var pedido = new Pedido(1500)
console.log(pedido.efetivarVendaSemChain());
console.log(pedido.efetivarVendaComChain());
