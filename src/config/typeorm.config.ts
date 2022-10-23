import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'password',
  database: 'delux',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
