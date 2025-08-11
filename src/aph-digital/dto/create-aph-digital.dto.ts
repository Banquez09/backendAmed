import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateAphDigitalDto {
  @IsString()
  @IsString()
  @IsOptional()
  numeroFormulario: string;

  @IsString()
  @IsNotEmpty()
  placa: string;

  @IsString()
  @IsNotEmpty()
  cc: string;

  @IsDateString()
  fecha: string;

  @IsString()
  @IsNotEmpty()
  nombrePaciente: string;

  @IsOptional()
  @IsBoolean()
  ambulanciaBasica?: boolean;

  @IsOptional()
  @IsBoolean()
  medicalizado?: boolean;

  @IsOptional()
  @IsBoolean()
  consultaMedica?: boolean;

  @IsOptional()
  @IsNumber()
  edad?: number;

  @IsOptional()
  @IsEnum(['M', 'F'])
  sexo?: string;

  @IsOptional()
  @IsString()
  identificacion?: string;

  @IsOptional()
  @IsEnum(['Soltero', 'Casado', 'Viudo', 'Divorciado', 'Union Libre'])
  estadoCivil?: string;

  @IsOptional()
  @IsString()
  diagnostico?: string;

  @IsOptional()
  @IsString()
  notaEvolucion?: string;

  @IsOptional()
  @IsString()
  fc?: string;

  @IsOptional()
  @IsString()
  fr?: string;

  @IsOptional()
  @IsString()
  temp?: string;

  @IsOptional()
  @IsString()
  ta?: string;

  @IsOptional()
  @IsString()
  aceptadoPor?: string;

  @IsOptional()
  @IsString()
  eps?: string;

  @IsOptional()
  @IsString()
  arl?: string;

  @IsOptional()
  @IsString()
  o2?: string;

  @IsOptional()
  @IsString()
  lmt?: string;

  @IsOptional()
  @IsBoolean()
  canulaNasal?: boolean;

  @IsOptional()
  @IsBoolean()
  equipoVenturi?: boolean;

  @IsOptional()
  @IsString()
  porcentajeOxigeno?: string;

  @IsOptional()
  @IsBoolean()
  mascaraReservorio?: boolean;

  @IsOptional()
  @IsBoolean()
  equiposBiomedicos?: boolean;

  @IsOptional()
  @IsBoolean()
  bombaInfusion?: boolean;

  @IsOptional()
  @IsString()
  via?: string;

  @IsOptional()
  @IsString()
  ccVia?: string;

  @IsOptional()
  @IsBoolean()
  equipoMultiparametro?: boolean;

  @IsOptional()
  @IsBoolean()
  ventiladorMecanico?: boolean;

  @IsOptional()
  @IsBoolean()
  respirador?: boolean;

  @IsOptional()
  @IsBoolean()
  valvulaPeep?: boolean;

  @IsOptional()
  @IsBoolean()
  desfibrilador?: boolean;

  @IsOptional()
  @IsBoolean()
  joules?: boolean;

  @IsOptional()
  @IsString()
  aspirador?: string;

  @IsOptional()
  @IsBoolean()
  collarCervical?: boolean;

  @IsOptional()
  @IsBoolean()
  pulsioximetro?: boolean;

  @IsOptional()
  @IsString()
  ambulanciaSolicitada?: string;

  @IsOptional()
  @IsString()
  direccionServicio?: string;

  @IsOptional()
  @IsString()
  tel?: string;

  @IsOptional()
  @IsString()
  destinoPaciente?: string;

  @IsOptional()
  @IsString()
  estudio?: string;

  @IsOptional()
  @IsString()
  horarioILL?: string;

  @IsOptional()
  @IsString()
  horarioNS?: string;

  @IsOptional()
  @IsString()
  horarioHILL?: string;

  @IsOptional()
  @IsString()
  horarioHNS?: string;

  @IsOptional()
  @IsString()
  horarioRS?: string;

  @IsOptional()
  @IsString()
  horarioHILL2?: string;

  @IsOptional()
  @IsString()
  horarioHNS2?: string;

  @IsOptional()
  @IsBoolean()
  servicioSimple?: boolean;

  @IsOptional()
  @IsBoolean()
  redondo?: boolean;

  @IsOptional()
  @IsBoolean()
  fallido?: boolean;

  @IsOptional()
  @IsString()
  direccionTrasladoPaciente?: string;

  @IsOptional()
  @IsString()
  responsablePaciente?: string;

  @IsOptional()
  @IsString()
  acompanante?: string;

  @IsOptional()
  @IsString()
  ccAcompanante?: string;

  @IsOptional()
  @IsString()
  recomendacionesTraslado?: string;

  @IsOptional()
  @IsArray()
  medicamentosInsumos?: {
    descripcion: string;
    cantidad: number;
    descripcion2: string;
    cantidad2: number;
  }[];

  @IsOptional()
  @IsString()
  ordenServicioNo?: string;

  @IsOptional()
  @IsString()
  remision?: string;

  @IsOptional()
  @IsString()
  factura?: string;

  @IsOptional()
  @IsEnum(['MUY_BUENA', 'BUENA', 'REGULAR', 'MALA', 'MUY_MALA'])
  comoParecioServicio?: string;

  @IsOptional()
  @IsBoolean()
  recomendariaFamiliares?: boolean;

  @IsOptional()
  @IsBoolean()
  recomendariaAmigos?: boolean;

  @IsOptional()
  @IsBoolean()
  definitivamenteSi?: boolean;

  @IsOptional()
  @IsBoolean()
  probablementeSi?: boolean;

  @IsOptional()
  @IsBoolean()
  definitivamenteNo?: boolean;

  @IsOptional()
  @IsBoolean()
  probablementeNo?: boolean;

  @IsOptional()
  @IsString()
  institucionResponsablePaciente?: string;

  @IsOptional()
  @IsString()
  institucionRecibePaciente?: string;

  @IsOptional()
  @IsString()
  firmaInstitucionRecibePaciente?: string;

  @IsOptional()
  @IsString()
  firmaPaciente?: string;

  @IsOptional()
  @IsString()
  firmaMedico?: string;

  @IsOptional()
  @IsString()
  firmaSelloResponsable?: string;

  @IsOptional()
  @IsString()
  funcionarioAMED?: string;

  @IsOptional()
  @IsString()
  firmaSelloFuncionario?: string;

  @IsOptional()
  @IsString()
  idUsuarioCreador?: string;

  @IsOptional()
  @IsString()
  evidencia?: string;

  @IsOptional()
  @IsString()
  tipoDocumento?: string;
}
