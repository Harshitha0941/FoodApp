/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { IsNumber } from "class-validator";

/* eslint-disable prettier/prettier */

/**
 * starting of OrderDetails Entity
 */
@Entity()
export class OrderDetails {

    /**
     * auto incremental id
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
    * generates userId column
    */
    @Column()
    @IsNumber()
    @ApiProperty()
    userId: number;

}