/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, Length } from "class-validator";

/* eslint-disable prettier/prettier */
export class FoodItemsDto {
    
    @ApiProperty() @IsString()  @Length(3,16) foodName: string;
    @ApiProperty() @IsNumber()  foodPrice:number;
    @ApiProperty() @IsString() @Length(4,30) foodCategory: string;
    @ApiProperty() @IsString() @Length(4,30) resName: string;


}