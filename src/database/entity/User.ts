import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'
@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    readonly id: string //uuid

    @Column()
    name: string

    @Column()
    email: string

    @CreateDateColumn()
    created_at: Date

    //uuid
    constructor() {
        if(!this.id) { //verifica se já possui uuid para o usuário, se não cria novo uuid
            this.id = uuid()
        }
    }

}
