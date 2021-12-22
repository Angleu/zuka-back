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

@Entity('telephone')
export default class Telephone {
    @PrimaryGeneratedColumn('uuid')
    number: string

    @OneToOne(() => User)
    @JoinColumn({name:'id_user'})
    user: User

    @Column('timestamp with time zone')
    @CreateDateColumn()
    created_at: Date

    @Column('timestamp with time zone')
    @UpdateDateColumn()
    updated_at: Date

}
