import { Module, Global} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Global()  //torna o user.module.ts um modulo global. Ou seja, o serviço "UserService" pode ser injetado em qualquer parte do código, não precisando importar o
@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}

