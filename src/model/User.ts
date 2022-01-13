import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn } from "typeorm";
@Entity('user')
export default class User {
    @PrimaryGeneratedColumn('uuid')
    id_user: string

    @Column()
    dataBirthday: Date
    
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
