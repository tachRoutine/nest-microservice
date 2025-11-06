import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('EMAIL_SERVICE') private readonly emailClient: ClientProxy,
  ) {}

  sendEmail() {
    this.emailClient.send('send_email', {
      to: 'test@example.com',
      subject: 'Welcome!',
    });
    console.log('Email send request initiated');
    return 'Email request sent';
  }
}
