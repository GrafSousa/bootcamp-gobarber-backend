import { ICreateNotificationDTO } from '../dtos/ICreateNotificationDTO';
import { Notification } from '../infra/typeorm/schemas/notification';

export interface INotificationsRepository {
  create(data: ICreateNotificationDTO): Promise<Notification>;
}
