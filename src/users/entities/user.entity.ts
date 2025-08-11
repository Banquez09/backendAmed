import { ApiProperty } from "@nestjs/swagger";
import { Ambulancia } from "src/ambulancia/entities/ambulancia.entity";
import { Rol } from "src/rol/entities/rol.entity";
import { Column, CreateDateColumn, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
@Index(['email'], { unique: true })
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ type: 'varchar', length: 100 })
    nombre: string;
  
    @Column({ type: 'varchar', length: 100 })
    apellido: string;
  
    @Column({ type: 'varchar', length: 255, unique: true })
    email: string;
  
    @Column({ type: 'varchar', length: 255 })
    password: string;
  
    @Column({ type: 'varchar', length: 20, nullable: true })
    telefono: string;
  
    @ManyToOne(() => Rol, rol => rol.user)
    @JoinColumn({ name: 'rolId' }) // Clave foránea
    rol: Rol;
  
    @ManyToOne(() => Ambulancia, ambulancia => ambulancia.user)
    @JoinColumn({ name: 'ambulanciaId' }) // Clave foránea
    ambulancia: Ambulancia;

    @Column({ type: 'text', nullable: true })
    firma: string;
  
    @CreateDateColumn({ type: 'timestamp with time zone' })
    createdAt: Date;
  
    @UpdateDateColumn({ type: 'timestamp with time zone' })
    updatedAt: Date;

}
