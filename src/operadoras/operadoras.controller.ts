import { Controller, Get, Param, BadRequestException } from '@nestjs/common';
import { OperadorasService } from './operadoras.service';
import { Operadora } from './operadora.entity';

@Controller('operadoras')
export class OperadorasController {
  constructor(private readonly operadorasService: OperadorasService) {}

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Operadora> {
    const idNumber = parseInt(id, 10);
    if (isNaN(idNumber)) {
      throw new BadRequestException('ID inválido');
    }
    return this.operadorasService.findById(idNumber);
  }
}
