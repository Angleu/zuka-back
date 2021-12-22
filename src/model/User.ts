import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, OneToOne } from "typeorm";
import Address from "./Address";

@Entity()
export default class User {
    @PrimaryGeneratedColumn('uuid')
    id_user: string

    @OneToOne(type => Address, address => address.user)
    address: Address

    @Column('varchar')
    name: string

    @Column('varchar')
    email: string

    @Column('varchar')
    password: string

    @Column('timestamp with time zone')
    @CreateDateColumn()
    created_at: Date

    @Column('timestamp with time zone')
    @UpdateDateColumn()
    updated_at: Date

}
