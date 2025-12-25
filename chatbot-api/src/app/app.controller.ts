import { Controller, Get, Post, Body } from '@nestjs/common';
import { ChatbotLogicService } from '@org/chatbot-logic';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Counter } from 'prom-client';

@Controller('chat')
export class AppController {
  constructor(
    private readonly chatbotService: ChatbotLogicService,
    @InjectMetric('chatbot_messages_total') public readonly counter: Counter 
  ) {}

  // 1. THE GET RESPONSE
  @Get()
  getBotStatus() {
    return {
      status: 'online',
      message: 'The chatbot is ready to receive POST messages.',
      timestamp: new Date().toISOString(),
    };
  }

  // 2. THE POST RESPONSE 
  @Post('ask')
  handleMessage(@Body('userMessage') message: string) {
    // Increment the Prometheus counter every time a message is received
    this.counter.inc();

    const reply = this.chatbotService.processChat(message);
    
    return {
      success: true,
      botResponse: reply,
      // Optional: Add a small flag to confirm the metric was recorded
      metricRecorded: true 
    };
  }
}