import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  create(createUserDto: any) {
    return 'This action adds a new user' + createUserDto;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }
}
