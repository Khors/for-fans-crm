import { Injectable, Inject } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {

  constructor(
    @Inject('USER_REPOSITORY')
    private userRepo: typeof User
  ) { }

  async create(email: string): Promise<User> {
    return this.userRepo.findOne({
      where: {
        email
      }
    });
  }

}
