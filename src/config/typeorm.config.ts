import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Ambulancia } from 'src/ambulancia/entities/ambulancia.entity';
import { AphDigital } from 'src/aph-digital/entities/aph-digital.entity';
import { EstadoAmbulancia } from 'src/estado-ambulancia/entities/estado-ambulancia.entity';
import { Rol } from 'src/rol/entities/rol.entity';
import { Solicitud } from 'src/solicitud/entities/solicitud.entity';
import { User } from 'src/users/entities/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'aws-0-us-east-2.pooler.supabase.com',
  port: 6543,
  username: 'postgres.wqgrnlbhozfgjhjizoom',
  password: 'Devsync2025+', 
  database: 'postgres',
//entities: [__dirname + '/**/*.entity{.ts,.js}'],
  entities: [User, Rol, Ambulancia, EstadoAmbulancia,Solicitud,AphDigital],
  synchronize: true, 
  logging: true,
  ssl: {
    rejectUnauthorized: false 
  },
  schema: 'sistema_traslados', 
};
