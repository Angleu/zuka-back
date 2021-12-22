import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid } from 'uuid'
import User from './User';

@Entity('common_account')
export default class Common_Acccount {

    @PrimaryGeneratedColumn()
    id_common_account: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'id_user' })
    id_user: User;

    @Column()
    balance: number;

    @Column()
    @CreateDateColumn()
    created_at: Date;

    @Column()
    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id_common_account) {
            this.id_common_account = uuid();
        }
    }
}