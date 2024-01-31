import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtService } from 'src/services/jwt.service';

@Controller({
  version: '1',
  path: 'auth'
})
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService
  ) { }

  @Post()
  async create(@Body() userCredentials: any) {
    try {
      const user = await this.authService.create(userCredentials.email);
      console.log('user', user);
      if (!user) {
        throw new HttpException('User can not be authorized', HttpStatus.BAD_REQUEST);
      }
      const token = this.jwtService.generateToken(user.dataValues);
      return {
        ...user.dataValues,
        token
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

}
