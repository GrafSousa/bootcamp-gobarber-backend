import { ISendMailDTO } from '../dtos/ISendMailDTO';

export interface IMailProvider {
  sendEmail(data: ISendMailDTO): Promise<void>;
}
