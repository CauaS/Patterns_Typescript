import { Cliente } from "../../cliente/Cliente";
import { EmailService } from "../../cliente/EmailService";
import { IClienteBuilder } from "./IClienteBuilder";


export class ClienteBuilder implements IClienteBuilder {
    private _nome: string;
    private _email: string;

    /**
     * 
     * @param nome Recebe o nome do cliente
     * @type Texto
     * @method Método do que controi o nome do cliente
     * @returns Retorna a classe ClienteBuilder
     */
    comNome(nome: string): ClienteBuilder {
        this._nome = nome;
        return this;
    }
    /**
     * 
     * @param email 
     * @returns 
     */
    comEmail(email: string): ClienteBuilder {
        this._email = email;
        return this;
    }
    
    /**
     * 
     * @returns 
     */
    builder(): Cliente {
        return new Cliente(new EmailService(), this._nome, this._email);
    }

}