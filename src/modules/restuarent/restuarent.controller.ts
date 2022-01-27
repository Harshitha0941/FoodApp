/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
 import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Restuarent } from 'src/entities/entity/restuarent.entity';
import { AddRestuarentDto } from './dto/restuarent.dto';
import { RestuarentService } from './restuarent.service';

/**
 * starting of RestuarentController
 */
@Controller('restuarent')
@ApiTags('restuarent')
export class RestuarentController {
  constructor(private readonly restuarentService: RestuarentService) {}

  /**
   *
   * @param addRestuarentDto accepts objects of addRestuarentDto
   * @returns user object , if restuarent is added Successfully
   */
  @Post('/addRestuarent')
  addRestuarent(@Body() addRestuarentDto: AddRestuarentDto): Promise<any> {
    return this.restuarentService.addRestuarent(addRestuarentDto);
  }

  /**
   * 
   * @returns all the restaurants
   */
  @Get()
  async getAllRes():Promise<any>{
    return this.restuarentService.getAll();
  }

   /**
   * 
   * @param restuarent accepts restuarent as input
   * @param resName accepts resName as inpt
   * @returns a string if details are updated
   */
  @Put('/:resName')
  async updateResDetails(@Body()restuarent:Restuarent,@Param('resName')resName:string):Promise<string>{
    return await this.restuarentService.updateResutrant(restuarent,resName);
  }
}