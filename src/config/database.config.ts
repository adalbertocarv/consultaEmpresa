import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',          // Substitua pelo host do seu banco de dados
  port: 5432,                 // Substitua pela porta do seu banco de dados
  username: 'postgres',    // Substitua pelo usuário do seu banco de dados
  password: '022002',      // Substitua pela senha do seu banco de dados
  database: 'appmobi',  // Substitua pelo nome do seu banco de dados
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,             // Desativar sincronização automática
  migrations: [__dirname + '/../migrations/**/*{.ts,.js}'],
};

// Configuração separada para CLI de migrações
export const cliConfig = {
  migrationsDir: 'src/migrations',
};