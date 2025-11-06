import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('send_email')
  handleSendEmail(@Payload() data: { to: string; subject: string }) {
    console.log('Received email data:', data);
    return { status: 'Email sent successfully', data };
  }
}
