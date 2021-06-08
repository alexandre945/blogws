import {Entity, PrimaryGeneratedColumn, Column,UpdateDateColumn} from "typeorm";
// import { v4 as uuid } from "uuid"
@Entity()
 class User {

    @PrimaryGeneratedColumn()
    id: string;
    @Column()
    name: string;

    @Column()
    email: string;
    
    @Column()
    senha: string;

    @UpdateDateColumn()
    creatd_at: Date;


}

export { User };
