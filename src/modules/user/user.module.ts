/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/entity/user.entity';

import { UserController } from './user.controller';
import { UserService } from './user.service';
/**
 * Staring of UserModule
 */
@Module({
  imports: [TypeOrmModule.forFeature([User])],

  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}