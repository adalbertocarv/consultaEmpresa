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

  async findById(idoperadora: number): Promise<Operadora> {
    this.logger.log(`Buscando operadora com o id ${idoperadora}`);
    const query = `

SELECT * FROM tab_operadora WHERE idoperadora = $1;

    `;

    const result = await this.operadorasRepository.query(query, [idoperadora]);
    this.logger.log(`Query result: ${JSON.stringify(result)}`);
    return result.length ? result[0] : null;

  }

}