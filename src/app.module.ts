import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { models } from './userscheckins/models';
import { UserCheckinsModule } from './userscheckins/userCheckins.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'nestdb',
      models: models,
      autoLoadModels: true,
      synchronize: false,
    }),
    UserCheckinsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
