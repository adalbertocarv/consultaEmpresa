import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Operadora } from './operadora.entity';
@Injectable()
export class OperadorasService {
 private readonly logger = new Logger(OperadorasService.name);
 constructor(
 @InjectRepository(Operadora)
 private operadorasRepository: Repository<Operadora>,
 ) {}
 /**
 * Busca uma operadora pelo ID.
 * 
 * Este método utiliza o repositório do TypeORM para buscar uma
operadora
 * pelo seu ID no banco de dados.
 * 
 * @param id_operadora - ID da operadora a ser buscada.
 * @returns A entidade Operadora correspondente ou null se não
encontrada.
 */
 async findById(id_operadora: number): Promise<Operadora> {
 // Loga a operação de busca de uma operadora pelo ID
 this.logger.log(`Buscando operadora com o id ${id_operadora}`);
 // Usa o repositório do TypeORM para buscar a operadora pelo ID
 const operadora = await this.operadorasRepository.findOne({
where: { id_operadora } });
 // Loga o resultado da busca
 this.logger.log(`Resultado da busca: 
${JSON.stringify(operadora)}`);
 // Retorna a operadora encontrada ou null se não encontrada
 return operadora;
 }
}