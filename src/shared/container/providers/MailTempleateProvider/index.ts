import { container } from 'tsyringe';

import { IMailTempleateProvider } from './models/IMailTempleateProvider';

import { HandlebarsMailTemplateProvider } from './implementations/HandlebarsMailTemplateProvider';

const providers = {
  handlebars: HandlebarsMailTemplateProvider,
};

container.registerSingleton<IMailTempleateProvider>(
  'MailTemplateProvider',
  providers.handlebars,
);
