import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('order')
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  userID: string;

  @Column({ type: 'varchar' })
  orderID: string;

  @Column({ type: 'varchar' })
  status: string;

  @Column({ type: 'varchar' })
  cartID: string;
}
