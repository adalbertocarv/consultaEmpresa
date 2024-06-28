import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { OperadorasModule } from './operadoras/operadoras.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    OperadorasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}