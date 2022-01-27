/* eslint-disable prettier/prettier */

import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { IsNumber, IsString } from "class-validator";
import { Restuarent } from './restuarent.entity';
import { Cart } from "./cart.entity";


/* eslint-disable prettier/prettier */

/**
 * starting of food items Entity
 */
@Entity()
export class FoodItems {

    /**
     * auto incremental id
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * generates fooodName column
     */
    @Column()
    @IsString()
    @ApiProperty()
    foodName: string;

    /**
     * generates foodPrice column
     */
    @Column()
    @IsNumber()
    @ApiProperty()
    foodPrice: number;

    /**
     * generates foodCategory column
     */
    @Column()
    @IsString()
    @ApiProperty()
    foodCategory: string;

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

    @ManyToOne(() => Restuarent, (res) => res.foodItems, {
        cascade: true
    })
    @JoinColumn()
    res: Restuarent;

    @OneToMany(() => Cart, (cart) => cart.foodItems, {
        cascade: true
    })
     @JoinColumn()
    cart: Cart[]
}