import { SendNotificationService } from './SendNotificationService';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotificationService();

    const { notification } = await sendNotification.execute({
      recipientId: 'fake-id',
      content: 'Atualização disponível',
      category: 'system',
    });

    expect(notification).toBeTruthy();
  });
});
