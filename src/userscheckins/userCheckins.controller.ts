import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UsersService } from './userCheckin.service';

@Controller()
export class UsersController {
  constructor(private userService: UsersService) {}

  @MessagePattern('usercheckin')
  addCheckin(userId: any): Promise<any> {
    return this.userService.addCheckin(userId);
  }

  @MessagePattern('getcheckins')
  async getCheckins(userId: any): Promise<any> {
    return this.userService.getCheckins(userId);
  }

  @MessagePattern('deletecheckins')
  async deleteCheckins(userId: any): Promise<any> {
    return this.userService.deleteCheckins(userId);
  }
}
