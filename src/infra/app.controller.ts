import { Controller, Get, Post, Body } from '@nestjs/common';
//import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from './CreateNotificationBody';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('list')
  list() {
    return this.prisma.notification.findMany();
  }

  @Post('create')
  async create(@Body() body: CreateNotificationBody) {
    const { content, category } = body;

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId: randomUUID(),
      },
    });
  }
}
