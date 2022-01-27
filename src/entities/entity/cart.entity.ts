/* eslint-disable prettier/prettier */
import { ApiProperty } from "@nestjs/swagger";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { IsNumber, IsString } from "class-validator";
import { User } from "./user.entity";
import { FoodItems } from "./foodItems.entity";

/* eslint-disable prettier/prettier */

/**
 * starting of Cart Entity
 */
@Entity('Cart')
export class Cart {

    /**
     * auto incremental id
     */
    @PrimaryGeneratedColumn()
    id: number;

    /**
     * generates price column
     */
    @Column()
    @IsNumber()
    @ApiProperty()
    foodPrice: number;

    /**
     * generates quantity column
     */
    @Column()
    @IsNumber()
    @ApiProperty()
    quantity: number;

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

    @ManyToOne(() => User, (user) => user.cart, {
        cascade: true
    })
    @JoinColumn()
    user: User;



    @ManyToOne(() => FoodItems, (foodItem) => foodItem.cart, {
    })
    @JoinColumn()
    foodItems: FoodItems[];

}