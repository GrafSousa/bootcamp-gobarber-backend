import { IMailTempleateProvider } from '../models/IMailTempleateProvider';

export class FakeMailTempleateProvider implements IMailTempleateProvider {
  public async parse(): Promise<string> {
    return 'Mail content';
  }
}
