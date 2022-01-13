import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class createTableTelephone1639562814790 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:'telephone',
            columns: [
                {
                    name:'number',
                    type:'varchar',
                    isPrimary: true
                },
                {
                    name:'id_user',
                    type: 'uuid'
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                }
            ],
            foreignKeys:[
                {
                    name:'fk_telephone_user',
                    columnNames:['id_user'],
                    referencedTableName: 'user',
                    referencedColumnNames:['id_user'],
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('telephone');

    }

}
