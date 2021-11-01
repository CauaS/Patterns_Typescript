import { IEmailService } from "./IEmailService";

export class EmailService implements IEmailService {
    isValid(email: string): Boolean {
        return email.includes("@");
    }
}
