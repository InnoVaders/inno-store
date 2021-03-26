import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { OrdersModule } from './orders/orders.module';
import { CoreModule } from './core/core.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    OrdersModule,
    NotificationsModule,
    CoreModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
