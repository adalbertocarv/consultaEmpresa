import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tab_operadora') // Nome da tabela no banco de dados
export class Operadora {
  @PrimaryGeneratedColumn()
  idoperadora: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  cnpj: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  nomfantasia: string;

  @Column({ type: 'date', nullable: true })
  datavigencia: Date;
  
  @Column({ type: 'date', nullable: true })
  datafimvigencia: Date;
}
