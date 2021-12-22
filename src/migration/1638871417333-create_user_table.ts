import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class createUserTable1638871417333 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
            await queryRunner.createTable(new Table({
                name:'user',
                columns: [
                    {
                        name:'id_user',
                        type:'uuid',
                        generationStrategy:'uuid',
                        default:'uuid_generate_v4()',
                        isUnique: true,
                        isPrimary: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        isNullable: false
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
                ]
            }),true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.dropTable('user');
    }

}
