import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from '../../products/entities/product.entity';

@Entity({
  name: 'orders'
})
export class OrderEntity {
  @PrimaryGeneratedColumn({
    name: 'id'
  })
  id: number;

  @Column({
    name: 'quantity'
  })
  quantity: number;

  @ManyToMany(
    () => ProductEntity,
    (product) => product.orders
  )
  products: ProductEntity[]

  @Column({
    name: 'date'
  })
  date: string;

}