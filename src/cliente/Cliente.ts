import { IEmailService } from "./IEmailService";

export class Cliente {
    private emailService : IEmailService
    public nome: string
    public email: string

    constructor(EmailService : IEmailService, nome: string, email?: string){
        this.emailService = EmailService;
        this.nome = nome;
        this.email = email ?? "";
    }

    public isValid(): Boolean {
        return this.emailService.isValid(this.email);
    }
}
