import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBProviders } from './db.providers';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from './services/jwt.service';
import { AuthMiddleware } from './middlewares/auth.middleware';

@Module({
  imports: [
    UserModule,
    AuthModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ...DBProviders,
    JwtService,
  ],
  exports: [
    ...DBProviders,
    JwtService,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: '*/user', method: RequestMethod.GET })
  }
}
