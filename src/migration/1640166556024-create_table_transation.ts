import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTableTransation1640166556024 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'transation',
            columns: [
                {
                    name: 'id_transation',
                    type: 'uuid',
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                    isPrimary: true
                },
                {
                    name: 'from_user',
                    type: 'uuid'
                },
                {
                    name: 'to_user',
                    type: 'uuid'
                },
                {
                    name: 'amount',
                    type: 'numeric',
                    isNullable: false
                },
                {
                    name: 'type',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'description',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ],
            foreignKeys: [
                {
                    name: 'fk_from_transation_user',
                    columnNames: ['from_user'],
                    referencedTableName: 'account',
                    referencedColumnNames: ['id_account'],
                },
                {
                    name: 'fk_to_transation_user',
                    columnNames: ['to_user'],
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
