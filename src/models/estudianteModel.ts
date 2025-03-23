import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Estudiante {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    dni: String;

    @Column()
    nombre: String;

    @Column()
    apellido: String;

    @Column()
    email: String;

}