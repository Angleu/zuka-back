import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid'
import Acccount from './Account';

@Entity('transation')
export default class Transation {

    @PrimaryGeneratedColumn()
    id_transation: string;

    @ManyToOne(() => Acccount)
    @JoinColumn({ name: 'id_account' })
    to_user: Acccount;

    @ManyToOne(() => Acccount)
    @JoinColumn({ name: 'id_account' })
    from_user: Acccount;

    @Column()
    account: number;

    @Column()
    type: string;

    @Column()
    description: string;

    @Column()
    @CreateDateColumn()
    created_at: Date;



    constructor() {
        if (!this.id_transation) {
            this.id_transation = uuid();
        }
    }
}