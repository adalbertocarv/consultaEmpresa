import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { OperadorasModule } from './operadoras/operadoras.module';
/**
* O módulo principal da aplicação.
* 
* Este módulo é responsável por configurar e inicializar a aplicação
NestJS.
* Ele importa e configura o módulo TypeORM para conectar ao banco de
dados,
* e também importa o módulo específico para operadoras.
*/
@Module({
 // Configura os módulos a serem importados
 imports: [
 // Configura a conexão com o banco de dados usando TypeORM
 TypeOrmModule.forRoot(databaseConfig),
 
 // Importa o módulo das operadoras, que contém toda a lógica relacionada às operadoras
 OperadorasModule,
 ],
 // Não há controladores globais para este módulo
 controllers: [],
 
 // Não há provedores globais para este módulo
 providers: [],
})
export class AppModule {}
