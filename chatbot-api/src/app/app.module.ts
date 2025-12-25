import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ChatbotLogicModule } from '@org/chatbot-logic'; // use your workspace name
import { PrometheusModule, makeCounterProvider} from '@willsoto/nestjs-prometheus';

@Module({
  imports: [ PrometheusModule.register(),
            ChatbotLogicModule,     // This "plugs in" the library
          ], 
  controllers: [AppController],
  providers: [
    // This creates a custom "tool" called CHAT_COUNTER
    makeCounterProvider({
      name: 'chatbot_messages_total',
      help: 'Total number of message processed by the chatbot',
    }),
  ],
})
export class AppModule {}
