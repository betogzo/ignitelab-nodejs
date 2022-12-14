import { IsNotEmpty, Length } from 'class-validator';

export class CreateNotificationBody {
  // @IsNotEmpty() //validation decorator
  // @IsUUID()
  // recipientId: string;

  @IsNotEmpty()
  @Length(5, 240)
  content: string;

  @IsNotEmpty()
  category: string;
}
