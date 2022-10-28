import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid', { comment: 'product umique identifier' })
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar' })
  categoryID: string;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'int' })
  promo_price: number;

  @Column({ type: 'boolean', default: false })
  in_stock: boolean;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar' })
  features: string[];

  @Column({ type: 'varchar' })
  image: string;

  @Column({ type: 'varchar' })
  overview: string;

  @Column({ type: 'varchar' })
  additional_info: string;

  @Column({ type: 'varchar' })
  reviewID: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;
}
