import { IsNotEmpty } from 'class-validator';

export class CreateCie10Dto {
  @IsNotEmpty()
  codigo: string;

  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  descripcion: string;
}
