import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export default class createTableAddress1638956829137 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table(
            {
                name: 'address',
                columns: [
                    {
                        name: 'id_address',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'id_user',
                        type: 'uuid',
                    },
                    {
                        name: 'city',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'street',
                        type: 'varchar',
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
                        name:'fk_address_user',
                        columnNames:['id_user'],
                        referencedTableName: 'user',
                        referencedColumnNames:['id_user']
                    }
                ]
            }
        ));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('address');
    }

}
