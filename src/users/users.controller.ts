import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';


@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  create(@Body() createUserDto: CreateUserDto): User {
    return this.usersService.create(createUserDto);
  }

  @Get('read')
  findAll(): User[] {
    return this.usersService.findAll();
  }

  @Get('read/:id')
  findOne(@Param('id') id: string): User {
    return this.usersService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): User {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string): User {
    return this.usersService.remove(+id);
  }

  @Delete('deleteAll')
  removeAll(): User[] {
    return this.usersService.removeAll();
  }
}
