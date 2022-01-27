/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, Length } from "class-validator";

/* eslint-disable prettier/prettier */
export class AddRestuarentDto {
    
    @ApiProperty() @IsString()  @Length(3,16) resName: string;
    @ApiProperty() @IsNumber()  resRating:number;
    @ApiProperty() @IsString() @Length(4,30) resAddress: string;
    @ApiProperty() @IsString() @Length(4,30) resDescrption: string;

}