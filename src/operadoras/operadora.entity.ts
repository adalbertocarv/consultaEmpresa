import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
/**
* Representa a entidade Operadora.
* 
* Esta classe é um mapeamento da tabela `tab_operadora` no banco de
dados,
* usando TypeORM para definir colunas e seus tipos.
*/
@Entity('tab_operadora') // Nome da tabela no banco de dados
export class Operadora {
 /**
 * Identificador único da operadora.
 * 
 * Esta coluna é uma chave primária gerada automaticamente.
 */
 @PrimaryGeneratedColumn()
 idoperadora: number;
 /**
 * CNPJ da operadora.
 * 
 * Esta coluna é do tipo VARCHAR, com comprimento máximo de 20
caracteres e pode ser nula.
 */
 @Column({ type: 'varchar', length: 20, nullable: true })
 cnpj: string;
 /**
 * Nome fantasia da operadora.
 * 
 * Esta coluna é do tipo VARCHAR, com comprimento máximo de 20
caracteres e pode ser nula.
 */
 @Column({ type: 'varchar', length: 20, nullable: true })
 nomfantasia: string;
 /**
 * Data de vigência da operadora.
 * 
 * Esta coluna é do tipo DATE e pode ser nula.
 */
 @Column({ type: 'date', nullable: true })
 datavigencia: Date;
 
 /**
 * Data de fim de vigência da operadora.
 * 
 * Esta coluna é do tipo DATE e pode ser nula.
 */
 @Column({ type: 'date', nullable: true })
 datafimvigencia: Date;
}