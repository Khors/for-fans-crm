import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserProviders } from './user.providers';
import { DBProviders } from 'src/db.providers';

@Module({
  controllers: [
    UserController
  ],
  providers: [
    UserService,
    ...DBProviders,
    ...UserProviders,
  ],
})
export class UserModule { }
