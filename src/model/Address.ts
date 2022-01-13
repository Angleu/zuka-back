import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    UpdateDateColumn,
    CreateDateColumn,
    OneToOne,
    JoinColumn
} from "typeorm";
import User from "./User";

@Entity('address')
export default class Address {
    @PrimaryGeneratedColumn('uuid')
    id_address: string;

    @OneToOne(() => User)
    @JoinColumn({name: "id_user"})
    user: User;

    @Column()
    country: string;

    @Column()
    city: string;

    @Column()
    street: string;

    @Column('timestamp with time zone')
    @CreateDateColumn()
    created_at: Date;

    @Column('timestamp with time zone')
    @UpdateDateColumn()
    updated_at: Date;

}

