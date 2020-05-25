import { IParseMailTempleateDTO } from '../dtos/IParseMailTempleateDTO';

export interface IMailTempleateProvider {
  parse(data: IParseMailTempleateDTO): Promise<string>;
}
