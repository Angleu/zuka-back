import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTableCommonAccount1639657970475 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'common_account',
            columns: [
                {
                    name: 'id_common_account',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                    name: 'id_user',
                    type: 'uuid'
                },
                {
                    name: 'balance',
                    type: 'numeric',
                    default: 0.0
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
            foreignKeys: [
                {
                    name: 'fk_commoun-account_user',
                    columnNames: ['id_user'],
                    referencedTableName: 'user',
                    referencedColumnNames: ['id_user']
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('common_account');
    }

}
