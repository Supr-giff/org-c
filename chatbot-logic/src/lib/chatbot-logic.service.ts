import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatbotLogicService {
  processChat(message: string): string {
    // SAFETY CHECK: If message is undefined or null, stop here!
    if (!message) {
      return 'I received an empty message. Please check your JSON body in Insomnia.';
    }

    const input = message.toLowerCase();

    if (input.includes('help')) {
      return 'I can help you with NestJS and Nx setup!';
    }

    if (input.includes('chatbot')) {
      return 'Hey! How is it going?';
    }

    if (input.includes('hello')) {
      return 'Hi! Your POST request is working perfectly.';
    }

    return `You sent: "${message}". I am a basic bot!`;
  }
}