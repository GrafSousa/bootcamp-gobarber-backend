import { IParseMailTempleateDTO } from '../dtos/IParseMailTempleateDTO';
import { IMailTempleateProvider } from '../models/IMailTempleateProvider';

export class FakeMailTempleateProvider implements IMailTempleateProvider {
  public async parse({ template }: IParseMailTempleateDTO): Promise<string> {
    return template;
  }
}
