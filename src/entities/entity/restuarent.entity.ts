/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { IsNumber, IsString } from "class-validator";
import { FoodItems } from './foodItems.entity';

/* eslint-disable prettier/prettier */

/**
 * starting of Restuarent Entity
 */
@Entity()
export class Restuarent {

    /**
     * auto incremental id
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * generates resName column
     */
    @Column()
    @IsString()
    @ApiProperty()
    resName: string;

    /**
     * generates resRating column
     */
    @Column()
    @IsNumber()
    @ApiProperty()
    resRating: number;

    /**
     * generates resAddress column
     */
    @Column()
    @IsString()
    @ApiProperty()
    resAddress: string;


    /**
     * generates resDescrption column
     */
    @Column()
    @IsString()
    @ApiProperty()
    resDescrption: string;

    /**
     * generates isActive column
     */
    @Column()
    @ApiProperty()
    isActive: boolean;

    /**
     * generates updatedAt column
     */
    @Column({ default: ' ' })
    @IsString()
    updatedAt: string;

    /**
     * generates createdAt column
     */
    @Column()
    @IsString()
    createdAt: string;

    /**
     * generates updatedTime column
     */
    @Column({ default: ' ' })
    @IsString()
    updatedTime: string;

    /**
     * generates createTime column
     */
    @Column()
    @IsString()
    createTime: string;

    @OneToMany(() => FoodItems, (foodItems) => foodItems.res, {
    })
    foodItems: FoodItems[];
}