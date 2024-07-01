import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vw_operadora') // Nome da tabela no banco de dados
export class Operadora {
  @PrimaryGeneratedColumn()
  id_operadora: number;

  @Column({ type: 'int', nullable: true })
  id_pessoa: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  sg_operadora: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  nm_operadora: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  cs_operadora: string;
}
