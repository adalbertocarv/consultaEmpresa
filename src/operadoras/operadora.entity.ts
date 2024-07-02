import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vw_operadora') // Nome da tabela no banco de dados
export class Operadora {
  @PrimaryGeneratedColumn()
  id_operadora: number;

  @Column({ type: 'varchar', length: 20 })
  sg_operadora: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  nm_operadora: string;

  @Column({ type: 'varchar', length: 14, nullable: true })
  cpf_cnpj: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  razao_social: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  nm_rep_legal: string;

  @Column({ type: 'varchar', length: 2, nullable: true })
  uf: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  tx_logradouro: string;

  @Column({ type: 'varchar', length: 50, nullable: true })
  tx_localidade: string;

  @Column({ type: 'int', nullable: true })
  nr_cep: number;
}
