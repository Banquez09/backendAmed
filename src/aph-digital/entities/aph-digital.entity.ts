import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class AphDigital {
    @PrimaryGeneratedColumn()
    id: number;

    // Información básica (requeridos)
    @Column({ type: 'varchar', length: 20 })
    numeroFormulario: string;

    @Column({ type: 'varchar', length: 100 })
    placa: string;

    @Column({ type: 'varchar', length: 50 })
    cc: string;

    @Column({ type: 'date' })
    fecha: Date;

    @Column({ type: 'varchar', length: 200 })
    nombrePaciente: string;

    // Campos adicionales del formulario
    @Column({ type: 'time', nullable: true })
    horaLlegada: string;

    @Column({ type: 'varchar', length: 150, nullable: true })
    estadoPaciente: string;

    @Column({ type: 'varchar', length: 150, nullable: true })
    nombreConductor: string;

    @Column({ type: 'varchar', length: 150, nullable: true })
    movil: string;

    // Tipo de servicio
    @Column({ type: 'boolean', default: false })
    ambulanciaBasica: boolean;

    @Column({ type: 'boolean', default: false })
    medicalizado: boolean;

    @Column({ type: 'boolean', default: false })
    consultaMedica: boolean;

    // Información del paciente
    @Column({ type: 'int', nullable: true })
    edad: number;

    @Column({ type: 'enum', enum: ['M', 'F'], nullable: true })
    sexo: string;

    @Column({ type: 'enum', enum: ['CC', 'TI', 'CE', 'PA', 'RC','PT'], nullable: true })
    tipoDocumento: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    identificacion: string;

    @Column({ type: 'enum', enum: ['Soltero', 'Casado', 'Viudo', 'Divorciado', 'Union Libre'], nullable: true })
    estadoCivil: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    eps: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    arl: string;

    @Column({ type: 'varchar', length: 255, nullable: true })
    direccion: string;

    @Column({ type: 'varchar', length: 20, nullable: true })
    telefono: string;

    // Diagnóstico y evolución
    @Column({ type: 'text', nullable: true })
    diagnostico: string;

    @Column({ type: 'text', nullable: true })
    notaEvolucion: string;

    @Column({ type: 'text', nullable: true })
    procedimientos: string;

    // Signos Vitales
    @Column({ type: 'varchar', length: 10, nullable: true })
    fc: string; // Frecuencia cardíaca

    @Column({ type: 'varchar', length: 10, nullable: true })
    fr: string; // Frecuencia respiratoria

    @Column({ type: 'varchar', length: 10, nullable: true })
    temp: string; // Temperatura

    @Column({ type: 'varchar', length: 20, nullable: true })
    ta: string; // Tensión arterial

    @Column({ type: 'varchar', length: 10, nullable: true })
    spo2: string; // Saturación de oxígeno

    @Column({ type: 'varchar', length: 10, nullable: true })
    glasgow: string; // Escala de Glasgow

    @Column({ type: 'varchar', length: 10, nullable: true })
    peso: string; // Peso en kg

    @Column({ type: 'varchar', length: 10, nullable: true })
    talla: string; // Talla en cm

    // Campos del servicio original que pueden ser útiles
    @Column({ type: 'varchar', length: 100, nullable: true })
    aceptadoPor: string;

    @Column({ type: 'varchar', length: 150, nullable: true })
    estadoclinicopac: string;

    // Oxígeno y equipos
    @Column({ type: 'varchar', length: 10, nullable: true })
    o2: string;

    @Column({ type: 'boolean', default: false })
    canulaNasal: boolean;

    @Column({ type: 'boolean', default: false })
    equipoVenturi: boolean;

    @Column({ type: 'varchar', length: 10, nullable: true })
    porcentajeOxigeno: string;

    @Column({ type: 'boolean', default: false })
    mascaraReservorio: boolean;

    @Column({ type: 'varchar', length: 10, nullable: true })
    via: string;

    @Column({ type: 'varchar', length: 10, nullable: true })
    ccVia: string;

    @Column({ type: 'varchar', length: 10, nullable: true })
    via2: string;

    @Column({ type: 'varchar', length: 10, nullable: true })
    ccVia2: string;

    // Equipos adicionales
    @Column({ type: 'boolean', default: false })
    equipoMultiparametro: boolean;

    @Column({ type: 'boolean', default: false })
    ventiladorMecanico: boolean;

    @Column({ type: 'boolean', default: false })
    valvulaPeep: boolean;

    @Column({ type: 'boolean', default: false })
    desfibrilador: boolean;

    @Column({ type: 'boolean', default: false })
    joules: boolean;

    @Column({ type: 'boolean', default: false })
    aspirador: boolean;

    @Column({ type: 'boolean', default: false })
    capnografo: boolean;

    @Column({ type: 'boolean', default: false })
    pulmoaire: boolean;

    // Información de transporte
    @Column({ type: 'varchar', length: 200, nullable: true })
    ambulanciaSolicitada: string;

    @Column({ type: 'varchar', length: 200, nullable: true })
    direccionServicio: string;

    @Column({ type: 'varchar', length: 20, nullable: true })
    tel: string;

    @Column({ type: 'varchar', length: 200, nullable: true })
    destinoPaciente: string;

    @Column({ type: 'varchar', length: 200, nullable: true })
    estudio: string;

    // Horarios
    @Column({ type: 'time', nullable: true })
    horarioLL1: string;

    @Column({ type: 'time', nullable: true })
    horarioSa1: string;

    @Column({ type: 'time', nullable: true })
    horarioLL2: string;

    @Column({ type: 'time', nullable: true })
    horarioSa2: string;

    @Column({ type: 'time', nullable: true })
    horarioLL3: string;

    @Column({ type: 'time', nullable: true })
    horarioSa3: string;

    @Column({ type: 'time', nullable: true })
    horarioLL4: string;

    @Column({ type: 'time', nullable: true })
    horarioSa4: string;

    // Tipo de servicio de ambulancia
    @Column({ type: 'boolean', default: false })
    servicioSimple: boolean;

    @Column({ type: 'boolean', default: false })
    redondo: boolean;

    @Column({ type: 'boolean', default: false })
    fallido: boolean;

    @Column({ type: 'text', nullable: true })
    direccionTrasladoPaciente: string;

    // Responsable del paciente
    @Column({ type: 'varchar', length: 200, nullable: true })
    responsablePaciente: string;

    @Column({ type: 'varchar', length: 200, nullable: true })
    acompanante: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    ccAcompanante: string;

    @Column({ type: 'text', nullable: true })
    recomendacionesTraslado: string;

    // Medicamentos e insumos (como JSON para flexibilidad)
    @Column({ type: 'json', nullable: true })
    medicamentosInsumos: {
        descripcion: string;
        cantidad: number;
    }[];

    // Información del servicio
    @Column({ type: 'varchar', length: 50, nullable: true })
    ordenServicioNo: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    remision: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    factura: string;

    @Column({ type: 'varchar', length: 200, nullable: true })
    lugarOcurrencia: string;

    @Column({ type: 'varchar', length: 200, nullable: true })
    destinoFinal: string;

    // Evaluación del servicio
    @Column({ type: 'varchar', nullable: true })
    comoParecioServicio: string;

    @Column({ type: 'varchar', length: 200, nullable: true })
    recomendacion: string;

    // Firmas y autorización
    @Column({ type: 'text', nullable: true })
    firmaMedico: string;

    @Column({ type: 'varchar', length: 200, nullable: true })
    nombreMedico: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    registroMedico: string;

    @Column({ type: 'text', nullable: true })
    firmaPaciente: string;

    @Column({ type: 'varchar', length: 200, nullable: true })
    nombreResponsable: string;

    @Column({ type: 'varchar', length: 50, nullable: true })
    parentesco: string;

    // Firmas y funcionarios
    @Column({ type: 'text', nullable: true })
    firmaSelloResponsable: string;

    @Column({ type: 'text', nullable: true })
    funcionarioAMED: string;

    @Column({ type: 'text', nullable: true })
    firmaInstitucionRecibePaciente: string;

    @Column({ type: 'text', nullable: true })
    consentimientoFirma: string;

    // Campos de control
    @Column({ type: 'text', nullable: true })
    idUsuarioCreador: string;

    @Column({ type: 'text', nullable: true })
    evidencia: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}