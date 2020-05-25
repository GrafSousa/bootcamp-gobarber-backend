import handlebars from 'handlebars';
import fs from 'fs';

import { IParseMailTempleateDTO } from '../dtos/IParseMailTempleateDTO';
import { IMailTempleateProvider } from '../models/IMailTempleateProvider';

export class HandlebarsMailTemplateProvider implements IMailTempleateProvider {
  public async parse({
    file,
    variables,
  }: IParseMailTempleateDTO): Promise<string> {
    const templateFileContent = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });

    const parseTemplate = handlebars.compile(templateFileContent);

    return parseTemplate(variables);
  }
}
