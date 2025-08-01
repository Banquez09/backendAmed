import { IsString, IsArray, ArrayNotEmpty, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateAmbulanciaDto {
    @IsString()
    @IsNotEmpty()
    placa: string;

    @IsString()
    @IsNotEmpty()
    ubicacionActual: string;

    @IsNumber()
    @IsNotEmpty()
    estadoAmbulanciaId: number;

    @IsArray()
    tripulacionIds: number[];

    @IsNumber()
    latitude: number;
  
    @IsNumber()
    longitude: number;
  
}
