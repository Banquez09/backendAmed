import { User } from "src/users/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rol {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 50, unique: true })
    nombre: string;
  
    @Column({ type: 'text', nullable: true })
    descripcion: string;
  
    @OneToMany(() => User, user => user.rol)
    user: User[];
}
