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
  // Información básica (requeridos)
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

  @IsString()
  @IsOptional()
  nombreConductor: string;

  // Campos adicionales del formulario
  @IsOptional()
  @IsString()
  horaLlegada?: string;

  @IsOptional()
  @IsString()
  estadoPaciente?: string;

  // Tipo de servicio
  @IsOptional()
  @IsBoolean()
  ambulanciaBasica?: boolean;

  @IsOptional()
  @IsBoolean()
  medicalizado?: boolean;

  @IsOptional()
  @IsBoolean()
  consultaMedica?: boolean;

  // Información del paciente
  @IsOptional()
  @IsNumber()
  edad?: number;

  @IsOptional()
  @IsEnum(['M', 'F'])
  sexo?: string;

  @IsOptional()
  @IsEnum(['CC', 'TI', 'CE', 'PA', 'RC'])
  tipoDocumento?: string;

  @IsOptional()
  @IsString()
  identificacion?: string;

  @IsOptional()
  @IsEnum(['Soltero', 'Casado', 'Viudo', 'Divorciado', 'Union Libre'])
  estadoCivil?: string;

  @IsOptional()
  @IsString()
  eps?: string;

  @IsOptional()
  @IsString()
  arl?: string;

  @IsOptional()
  @IsString()
  direccion?: string;

  @IsOptional()
  @IsString()
  telefono?: string;

  // Diagnóstico y evolución
  @IsOptional()
  @IsString()
  diagnostico?: string;

  @IsOptional()
  @IsString()
  notaEvolucion?: string;

  @IsOptional()
  @IsString()
  procedimientos?: string;

  // Signos Vitales
  @IsOptional()
  @IsString()
  fc?: string; // Frecuencia cardíaca

  @IsOptional()
  @IsString()
  fr?: string; // Frecuencia respiratoria

  @IsOptional()
  @IsString()
  temp?: string; // Temperatura

  @IsOptional()
  @IsString()
  ta?: string; // Tensión arterial

  @IsOptional()
  @IsString()
  spo2?: string; // Saturación de oxígeno

  @IsOptional()
  @IsString()
  glasgow?: string; // Escala de Glasgow

  @IsOptional()
  @IsString()
  peso?: string; // Peso en kg

  @IsOptional()
  @IsString()
  talla?: string; // Talla en cm

  // Campos del servicio original que pueden ser útiles
  @IsOptional()
  @IsString()
  aceptadoPor?: string;

  @IsOptional()
  @IsString()
  estadoclinicopac?: string;

  // Oxígeno y equipos
  @IsOptional()
  @IsString()
  o2?: string;

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
  @IsString()
  via?: string;

  @IsOptional()
  @IsString()
  ccVia?: string;

  @IsOptional()
  @IsString()
  via2?: string;

  @IsOptional()
  @IsString()
  ccVia2?: string;

  // Equipos adicionales
  @IsOptional()
  @IsBoolean()
  equipoMultiparametro?: boolean;

  @IsOptional()
  @IsBoolean()
  ventiladorMecanico?: boolean;

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
  @IsBoolean()
  aspirador?: boolean;

  @IsOptional()
  @IsBoolean()
  capnografo?: boolean;

  @IsOptional()
  @IsBoolean()
  pulmoaire?: boolean;

  // Información de transporte
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

  // Horarios
  @IsOptional()
  @IsString()
  horarioLL1?: string;

  @IsOptional()
  @IsString()
  horarioSa1?: string;

  @IsOptional()
  @IsString()
  horarioLL2?: string;

  @IsOptional()
  @IsString()
  horarioSa2?: string;

  @IsOptional()
  @IsString()
  horarioLL3?: string;

  @IsOptional()
  @IsString()
  horarioSa3?: string;

  @IsOptional()
  @IsString()
  horarioLL4?: string;

  @IsOptional()
  @IsString()
  horarioSa4?: string;

  // Tipo de servicio de ambulancia
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

  // Responsable del paciente
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

  // Medicamentos e insumos
  @IsOptional()
  @IsArray()
  medicamentosInsumos?: {
    descripcion: string;
    cantidad: number;
  }[];

  // Información del servicio
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
  @IsString()
  lugarOcurrencia?: string;

  @IsOptional()
  @IsString()
  destinoFinal?: string;

  @IsString()
  @IsOptional()
  consentimientoFirma: string;

  // Recomendaciones
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

  // Firmas y autorización
  @IsOptional()
  @IsString()
  firmaMedico?: string;

  @IsOptional()
  @IsString()
  nombreMedico?: string;

  @IsOptional()
  @IsString()
  registroMedico?: string;

  @IsOptional()
  @IsString()
  firmaPaciente?: string;

  @IsOptional()
  @IsString()
  nombreResponsable?: string;

  @IsOptional()
  @IsString()
  parentesco?: string;

  // Firmas y funcionarios
  @IsOptional()
  @IsString()
  firmaSelloResponsable?: string;

  @IsOptional()
  @IsString()
  funcionarioAMED?: string;

  @IsOptional()
  @IsString()
  firmaInstitucionRecibePaciente?: string;

  // Campos de control
  @IsOptional()
  @IsString()
  idUsuarioCreador?: string;

  @IsOptional()
  @IsString()
  evidencia?: string;

  @IsOptional()
  @IsString()
  comoParecioServicio?: string;

  @IsOptional()
  @IsString()
  recomendacion?: string;
}
