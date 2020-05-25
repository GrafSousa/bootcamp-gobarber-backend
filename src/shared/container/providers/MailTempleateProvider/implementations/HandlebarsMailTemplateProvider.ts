import handlebars from 'handlebars';

import { IParseMailTempleateDTO } from '../dtos/IParseMailTempleateDTO';
import { IMailTempleateProvider } from '../models/IMailTempleateProvider';

export class HandlebarsMailTemplateProvider implements IMailTempleateProvider {
  public async parse({
    template,
    variables,
  }: IParseMailTempleateDTO): Promise<string> {
    const parseTemplate = handlebars.compile(template);

    return parseTemplate(variables);
  }
}
