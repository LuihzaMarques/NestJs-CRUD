import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  create(createUserDto: CreateUserDto): User {
    const user: User = {
      id: this.users.length + 1,
      ...createUserDto,
    };
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findOne(id: number): User {
    return this.users.find(user => user.id === id);
  }

  update(id: number, updateUserDto: UpdateUserDto): User {
    const user = this.findOne(id);

    if (user) {
      user.name = updateUserDto.name !== undefined ? updateUserDto.name : user.name;
      user.age = updateUserDto.age !== undefined ? updateUserDto.age : user.age;

      return user;
    }
    return null;
  }

  remove(id: number): User {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      const removedUser = this.users.splice(userIndex, 1);
      return removedUser[0];
    }
    return null;
  }

  removeAll(): User[] {
    const removedUsers = [...this.users];
    this.users = [];
    return removedUsers;
  }
}
