import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { JwtService } from 'src/services/jwt.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {

    constructor(
        private jwtService: JwtService
    ) { }

    use(req: Request, res: Response, next: NextFunction) {
        try {
            console.log('Request...');
            const token = req.headers['authorization'];
            const userPayload = this.jwtService.verifyAndDecodeToken(token);
            req['userPayload'] = userPayload
            next();
        } catch (error) {
            next(new HttpException('Unauthorize', HttpStatus.UNAUTHORIZED));
        }
    }
}
