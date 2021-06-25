import {Entity, PrimaryGeneratedColumn, Column,UpdateDateColumn,CreateDateColumn} from "typeorm";
//  import { v4 as uuid } from "uuid"
@Entity("user")
 class User {

    @PrimaryGeneratedColumn()
    id: string;
    @Column()
    name: string;

    @Column()
    email: string;
    
    @Column()
    senha: string;

    @CreateDateColumn()
    creatd_at: Date;

    @UpdateDateColumn()
    updated_at: Date;


}

export { User };
