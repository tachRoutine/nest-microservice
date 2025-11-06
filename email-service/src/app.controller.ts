import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern({ cmd: 'send_email' })
  handleSendEmail(@Payload() data: any) {
    console.log('Received email data:', data);
  }
}
