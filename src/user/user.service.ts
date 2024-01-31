import { Inject, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @Inject('USER_REPOSITORY')
    private userRepo: typeof User
  ) { }

  async create(createUserDto: any): Promise<User> {
    return this.userRepo.create(createUserDto);
  }

  async findAll(): Promise<User[]> {
    return this.userRepo.findAll<User>();
  }

  findOne(id: number) {
    return this.userRepo.findOne({
      where: {
        id
      }
    });
  }
}
