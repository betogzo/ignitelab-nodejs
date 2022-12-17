import { Notification } from 'application/entities/notification';
import { NotificationsRepository } from 'application/repositories/notification-repositories';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public fakeDB: Notification[] = [];

  async create(notification: Notification) {
    this.fakeDB.push(notification);
  }
}
