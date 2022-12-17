import { Notification } from 'application/entities/notification';
import { InMemoryNotificat ionsRepository } from '../test/in-memory-notifications-repository';
import { SendNotificationService } from './SendNotificationService';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotificationService(
      notificationsRepository
    );

    const { notification } = await sendNotification.execute({
      recipientId: 'fake-id',
      content: 'Atualização disponível',
      category: 'system',
    });

    //expect(notification).toBeTruthy();
    expect(notificationsRepository.fakeDB).toHaveLength(1);
  });
});
