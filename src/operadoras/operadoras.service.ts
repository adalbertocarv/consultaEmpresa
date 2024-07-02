import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Operadora } from './operadora.entity';

@Injectable()
export class OperadorasService {
  constructor(
    @InjectRepository(Operadora)
    private operadorasRepository: Repository<Operadora>,
  ) {}

  findBySgOperadora(sg_operadora: string): Promise<Operadora> {
    return this.operadorasRepository.findOneBy({ sg_operadora });
  }

  findByNmOperadora(nm_operadora: string): Promise<Operadora[]> {
    return this.operadorasRepository.find({
      where: {
        nm_operadora: Like(`%${nm_operadora}%`),
      },
    });
  }
}
