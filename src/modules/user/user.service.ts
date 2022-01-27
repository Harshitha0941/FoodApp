/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/entity/user.entity';
import { Repository } from 'typeorm';
import { AddUserDto } from './dto/user.dto';
import { DataNotAdded } from 'src/common/filters/customException.exception';

/**
 * starting of the UserService
 */
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  /**
   *
   * @param addUserDto accepts objects of adduserDto
   * @returns user object , if user is added Successfully
   */
  async addUserDetails(addUserDto: AddUserDto): Promise<string> {
    const user: User = new User();
    Object.assign(user, addUserDto);
    user.isActive = true;
    user.updatedAt = '';
    user.updatedTime = '';
    const date = new Date();
    user.createdAt = date.toLocaleDateString();
    user.createTime = date.toLocaleTimeString();
    const result =  await this.userRepository.save(user);
    if(result){
      return "User Registered Successfully"
    }
    else throw new DataNotAdded();
  }

  /**
   * 
   * @param emailId accepts emailId of type string
   * @returns a user objects
   */
  async getUserByEmail(emailId: string) {
    return await this.userRepository.findOne({
      emailId: emailId,
    });
  }

  /**
   * 
   * @returns all the user details
   */
  async getAllDetails():Promise<any>{
    return this.userRepository.find();
  }
}