import { Injectable } from '@angular/core';
import * as EmailJS from 'emailjs-com';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  // Send main email
  sendEmail(params: any): Promise<any> {
    return EmailJS.send(
      environment.emailJs.serviceId,
      environment.emailJs.templateId,
      params,
      environment.emailJs.publicKey
    );
  }

  // Send acknowledgment email
  sendAcknowledgment(params: any): Promise<any> {
    const ackParams = {
      to_name: params.sender_name,
      to_email: params.sender_email,
      user_message: params.sender_message
    };

    return EmailJS.send(
      environment.emailJs.serviceId,
      environment.emailJs.templateAckId,
      ackParams,
      environment.emailJs.publicKey
    );
  }
}
