import { Cliente } from "src/cliente/Cliente";
import { ClienteBuilder } from "./ClienteBuilder";

export interface IClienteBuilder {
    comNome(nome: string): ClienteBuilder;
    comEmail(email: string): ClienteBuilder;
    builder(): Cliente;
}