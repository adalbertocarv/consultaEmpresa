import { Controller, Get, Param, BadRequestException } from
'@nestjs/common';
import { OperadorasService } from './operadoras.service';
import { Operadora } from './operadora.entity';
/**
* Controlador que gerencia as rotas relacionadas às operadoras.
* 
* Este controlador define as rotas HTTP e liga essas rotas aos
métodos do serviço correspondente.
*/
@Controller('operadoras')
export class OperadorasController {
 constructor(private readonly operadorasService: OperadorasService)
{}
 /**
 * Rota GET para buscar uma operadora pelo ID.
 * 
 * Este método valida o parâmetro ID, lança uma exceção se for
inválido,
 * e chama o serviço para buscar a operadora correspondente.
 * 
 * @param id - ID da operadora como string.
 * @returns A entidade Operadora correspondente.
 * @throws BadRequestException - Se o ID for inválido.
 */
 @Get(':id')
 async findById(@Param('id') id: string): Promise<Operadora> {
 // Converte o ID de string para número inteiro
 const idNumber = parseInt(id, 10);
 // Verifica se a conversão resultou em um número válido
 if (isNaN(idNumber)) {
 // Lança uma exceção de requisição inválida se o ID não for um número válido
 throw new BadRequestException('ID inválido');
 }
 // Chama o serviço para buscar a operadora pelo ID
 return this.operadorasService.findById(idNumber);
 }
}
