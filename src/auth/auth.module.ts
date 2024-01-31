import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserProviders } from 'src/user/user.providers';
import { JwtService } from 'src/services/jwt.service';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    ...UserProviders,
    JwtService
  ],
})
export class AuthModule { }
