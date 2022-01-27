/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, Length } from "class-validator";

/* eslint-disable prettier/prettier */
export class CartDto {
    
    @ApiProperty() @IsString()  @Length(3,16) foodName: string;
    @ApiProperty() @IsNumber()  quantity:number;
    @ApiProperty() @IsString() @Length(4,30) emailId: string;
    @ApiProperty() @IsString() @Length(4,30) resName: string;

}