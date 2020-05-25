import { IParseMailTempleateDTO } from '@shared/container/providers/MailTempleateProvider/dtos/IParseMailTempleateDTO';

interface IMailContact {
  name: string;
  email: string;
}

export interface ISendMailDTO {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateData: IParseMailTempleateDTO;
}
