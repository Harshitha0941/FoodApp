/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataNotAdded } from 'src/common/filters/customException.exception';
import { Restuarent } from 'src/entities/entity/restuarent.entity';
import { Repository } from 'typeorm';
import { AddRestuarentDto } from './dto/restuarent.dto';

/**
 * starting of RestuarentService
 */
@Injectable()
export class RestuarentService {
  constructor(
    @InjectRepository(Restuarent)
    private restuarentRepository: Repository<Restuarent>,
  ) {}

  /**
   * 
   * @param addRestuarentDto accepts addRestuarentDto object
   */
  async addRestuarent(addRestuarentDto: AddRestuarentDto): Promise<string> {
    const restuarent = new Restuarent();
    const date = new Date();
    Object.assign(restuarent, addRestuarentDto);
    restuarent.isActive = true;
    restuarent.createdAt = date.toLocaleDateString();
    restuarent.createTime = date.toLocaleTimeString();
    const result  = await this.restuarentRepository.save(restuarent);
    if(result){
      return "Restuarent added Successfully";
    }
    else throw new DataNotAdded();
  }

  /**
   * 
   * @param resName receives resName of type string
   * @returns a object of particluar res
   */
  async getByResName(resName:string):Promise<any>{
     const result = await this.restuarentRepository.findOne(
      {resName : resName }
    )
    return result;
  }
/**
 * 
 * @returns all the restautants
 */
  async getAll():Promise<any>{
    return await this.restuarentRepository.find();
  }

  /**
   * 
   * @param restuarent accepts restuarent as input
   * @param resName accepts resName as inpt
   * @returns a string if details are updated
   */
   async updateResutrant(resturant: AddRestuarentDto,resName: string): Promise<any> {

    let resObj = await this.getByResName(resName);
    const date = new Date();
    const id = resObj.id;
    resObj = new Restuarent();
    resObj.updatedAt = date.toLocaleDateString();
    resObj.updatedTime = date.toLocaleTimeString();
    resObj.isActive = true;
    Object.assign(resObj, resturant);
    return await this.restuarentRepository.update(id, resObj);

  }
}
