import { type } from "os";
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1621082425229 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "nome",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                    },
                    {
                        name:"senha",
                        type: "varchar",
                    },
                 
                    {
                       name:"adimin",
                       type:"boolean",
                       default: false,
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()",
                    },
                    {
                        name:"updated_at",
                        type:"timestemp",
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
