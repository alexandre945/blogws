import { type } from "os";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1621082425229 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns:[
                    {
                        name: "id",
                        type: "uudi",
                        isPrimary: true,
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name:"creatd_at",
                        type:"timestamp",
                        default:"now()",
                    },
                  

               
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
