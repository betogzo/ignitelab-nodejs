import { Replace } from 'helpers/Replace';
import { Content } from './content';

export interface INotificationData {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private data: INotificationData;

  constructor(data: Replace<INotificationData, { createdAt?: Date }>) {
    this.data = { ...data, createdAt: data.createdAt ?? new Date() };
  }

  public set recipientId(recipientId: string) {
    this.data.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.data.recipientId;
  }

  public set content(content: Content) {
    this.data.content = content;
  }

  public get content(): Content {
    return this.data.content;
  }

  public set category(category: string) {
    this.data.category = category;
  }

  public get category(): string {
    return this.data.category;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.data.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.data.readAt;
  }

  public get createdAt(): Date {
    return this.data.createdAt;
  }
}
