import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})

export class User {

    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number;

    @Column({type: 'varchar', length: 255, unique: true})
    username: string;

    @Column()
    password: string;

    @Column()
    createdAt: Date;
    
    @Column({nullable: true})
    authStrategy: string;



}