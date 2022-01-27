/* eslint-disable prettier/prettier */
 import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AddUserDto } from './dto/user.dto';
import { UserService } from './user.service';

/**
 * starting of userController
 */
@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   *
   * @param addUserDto accepts objects of adduserDto
   * @returns user object , if user is added Successfully
   */
  @Post('/addUser')
  addUserDetails(@Body() addUserDto: AddUserDto): Promise<string> {
    return this.userService.addUserDetails(addUserDto);
  }


  /**
   * 
   * @returns all the user details
   */
  @Get()
  getUserDetails():Promise<any>{
    return this.userService.getAllDetails();
  }
}