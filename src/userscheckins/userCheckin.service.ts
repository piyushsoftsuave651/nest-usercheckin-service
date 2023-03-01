import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from 'src/app.service';
import { UserCheckin } from './models';

@Injectable()
export class UsersService{
  async addCheckin(userId: any): Promise<any> {
    try {
      const checkin: any = await UserCheckin.create({ userId: userId });
      if (checkin) return checkin;
    } catch (error) {
      return error.message;
    }
  }

  async getCheckins(userId: any): Promise<UserCheckin[] | any> {
    try {
      const checkins: any = await UserCheckin.findAll({
        where: { userId: userId },
      });
      if (checkins) return checkins;
    } catch (error) {
      return error.message;
    }
  }

  async deleteCheckins(userId: any): Promise<any> {
    try {
      if (!(await UserCheckin.count({ where: { userId: userId } })))
        return 'user checkins not found';
      const deleteCheckin: any = await UserCheckin.destroy({
        where: { userId: userId },
      });
      if (deleteCheckin) return 'user checkins deleted succesfully';
    } catch (error) {
      return error.message;
    }
  }
}
