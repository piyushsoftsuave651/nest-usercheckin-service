import { Module } from '@nestjs/common';
import { UsersController } from './userCheckins.controller';
import { UsersService } from './userCheckin.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UserCheckinsModule {}
