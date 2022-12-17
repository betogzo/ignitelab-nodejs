import { Notification } from '../application/entities/notification';
import { Content } from '../application/entities/content';
import { NotificationsRepository } from 'application/repositories/notification-repositories';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotificationService {
  constructor(private notificationsRepository: NotificationsRepository) {

  }

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.notificationsRepository.create(notification);

    return { notification };
  }
}
