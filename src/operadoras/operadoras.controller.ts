import { Controller, Get, Param, BadRequestException } from '@nestjs/common';
import { OperadorasService } from './operadoras.service';
import { Operadora } from './operadora.entity';

/**
 * Controlador que gerencia as rotas relacionadas às operadoras.
 * 
 * Este controlador define as rotas HTTP e liga essas rotas aos
 * métodos do serviço correspondente.
 */
@Controller('operadoras')
export class OperadorasController {
  constructor(private readonly operadorasService: OperadorasService) {}

  /**
   * Rota GET para buscar uma operadora pelo sg_operadora.
   * 
   * Este método valida o parâmetro sg_operadora e chama o serviço
   * para buscar a operadora correspondente.
   * 
   * @param sg_operadora - sg_operadora da operadora como string.
   * @returns A entidade Operadora correspondente.
   * @throws BadRequestException - Se o sg_operadora for inválido.
   */
  @Get('sg/:sg_operadora')
  async findBySgOperadora(@Param('sg_operadora') sg_operadora: string): Promise<Operadora> {
    if (!sg_operadora) {
      throw new BadRequestException('sg_operadora inválido');
    }
    return this.operadorasService.findBySgOperadora(sg_operadora);
  }

  /**
   * Rota GET para buscar operadoras pelo nm_operadora.
   * 
   * Este método valida o parâmetro nm_operadora e chama o serviço
   * para buscar as operadoras correspondentes.
   * 
   * @param nm_operadora - Nome da operadora como string.
   * @returns A lista de entidades Operadora correspondentes.
   * @throws BadRequestException - Se o nm_operadora for inválido.
   */
  @Get('nome/:nm_operadora')
  async findByNmOperadora(@Param('nm_operadora') nm_operadora: string): Promise<Operadora[]> {
    if (!nm_operadora) {
      throw new BadRequestException('nm_operadora inválido');
    }
    return this.operadorasService.findByNmOperadora(nm_operadora);
  }
}
