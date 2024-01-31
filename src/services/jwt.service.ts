import { Injectable, OnModuleInit } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService implements OnModuleInit {

    tokenTimeout = '1d';
    jwtKey: string;
    constructor(
    ) { }

    onModuleInit() {
        this.jwtKey = process.env.JWT_KEY;
    }

    getBlacklistedTokenKey(jwtId) {
        return `JWT:${jwtId}`;
    };

    generateToken(data) {
        try {
            const token = jwt.sign(
                {
                    ...data,
                },
                this.jwtKey,
                { expiresIn: this.tokenTimeout }
            );
            return token;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    async verifyAndDecodeToken(token) {
        const decoded = jwt.verify(token, this.jwtKey, { maxAge: this.tokenTimeout });
        return decoded;
    }

}
