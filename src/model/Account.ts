import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import User from './User';

@Entity('account')
export default class Acccount {

    @PrimaryGeneratedColumn()
    id_account: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'id_user', referencedColumnName:'id_user'})
    user: User;

    @Column()
    balance: number;

    @Column()
    coin: string;

    @Column()
    @CreateDateColumn()
    created_at: Date;

    @Column()
    @UpdateDateColumn()
    updated_at: Date;

    // constructor() {
    //     if (!this.id_account) {
    //         this.id_account = uuid();
    //     }
    // }
}