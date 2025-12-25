import { Module } from '@nestjs/common';
import { ChatbotLogicService } from './chatbot-logic.service';

@Module({
  providers: [ChatbotLogicService], // Registers it inside this module
  exports: [ChatbotLogicService],   // ALLOWS other modules to use it
})
export class ChatbotLogicModule {}