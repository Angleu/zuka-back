import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Account from './Account';

@Entity('transation')
export default class Transation {

    @PrimaryGeneratedColumn()
    id_transation: string;

    @ManyToOne(() => Account)
    @JoinColumn({ name: 'to_user', referencedColumnName:'id_account'})
    to_user: Account;

    @ManyToOne(() => Account)
    @JoinColumn({ name: 'from_user', referencedColumnName:'id_account'})
    from_user: Account;

    @Column()
    amount: number;

    @Column()
    type: string;

    @Column()
    description: string;

    @Column()
    coin: string;

    @Column()
    @CreateDateColumn()
    created_at: Date;



    // constructor() {
    //     if (!this.id_transation) {
    //         this.id_transation = uuid();
    //     }
    // }
}