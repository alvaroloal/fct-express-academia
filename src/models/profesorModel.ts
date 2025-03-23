import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Profesor {

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

    @Column()
    profesion: String;

    @Column()
    telefono: String;


}