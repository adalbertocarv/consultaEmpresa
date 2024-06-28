import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Operadora } from './operadora.entity';
import { OperadorasService } from './operadoras.service';
import { OperadorasController } from './operadoras.controller';
/**
* Módulo das Operadoras.
* 
* Este módulo é responsável por agrupar e organizar todos os
componentes
* relacionados à entidade Operadora, incluindo o serviço, o
controlador e a entidade.
*/
@Module({
 imports: [
 // Importa o módulo TypeORM e registra a entidade Operadora
 TypeOrmModule.forFeature([Operadora]),
 ],
 // Define os provedores disponíveis neste módulo
 providers: [OperadorasService],
 // Define os controladores disponíveis neste módulo
 controllers: [OperadorasController],
})
export class OperadorasModule {}