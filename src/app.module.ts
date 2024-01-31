import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBProviders } from './db.providers';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    ...DBProviders,
  ],
})
export class AppModule { }
