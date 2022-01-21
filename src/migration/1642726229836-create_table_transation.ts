import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableTransation1642726229836 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'transation',
            columns: [
                {
                    name: 'id_transation',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'to_user',
                    type: 'uuid',
                    isNullable: false
                },
                {
                    name: 'from_user',
                    type: 'uuid',
                    isNullable: false
                },
                {
                    name: 'amount',
                    type: 'numeric',
                    isNullable: false
                },
                {
                    name: 'coin',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'type',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'description',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ],
            foreignKeys: [
                {
                    name: 'fk_transation_touser',
                    columnNames: ['to_user'],
                    referencedTableName: 'account',
                    referencedColumnNames: ['id_account'],
                   
                },
                {
                    name: 'fk_transation_fromuser',
                    columnNames: ['from_user'],
                    referencedTableName: 'account',
                    referencedColumnNames: ['id_account'],
                   
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('transation');
    }

}
