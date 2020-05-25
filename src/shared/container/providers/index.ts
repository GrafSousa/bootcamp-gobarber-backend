import { container } from 'tsyringe';

import { IStorageProvider } from './StorageProvider/models/IStorageProvider';
import { DiskStorageProvider } from './StorageProvider/implementations/DiskStorageProvider';

import { IMailProvider } from './MailProvider/models/IMailProvider';
import { EtherealMailProvider } from './MailProvider/implementations/EtherealMailProvider';

import { IMailTempleateProvider } from './MailTempleateProvider/models/IMailTempleateProvider';
import { HandlebarsMailTemplateProvider } from './MailTempleateProvider/implementations/HandlebarsMailTemplateProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider
);

container.registerSingleton<IMailTempleateProvider>(
  'MailTemplateProvider',
  HandlebarsMailTemplateProvider
);

container.registerInstance<IMailProvider>(
  'MailProvider',
  container.resolve(EtherealMailProvider)
);
