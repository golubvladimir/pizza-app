import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEntity } from '../../categories/entities/category.entity';
import { OrderEntity } from '../../orders/entities/order.entity';

@Entity({
  name: 'products'
})
export class ProductEntity {

  @PrimaryGeneratedColumn({
    name: 'id'
  })
  id: string;

  @Column({
    name: 'title'
  })
  title: string;

  @Column({
    name: 'description'
  })
  description: string;

  @ManyToOne(
    () => CategoryEntity,
    (category) => category.products,
    {
      nullable: true,
      cascade: true
    }
  )
  @JoinColumn({
    name: 'category_id'
  })
  category: CategoryEntity;

  @ManyToMany(
    () => OrderEntity,
    (order) => order.products,
    {
      nullable: true,
      cascade: true
    }
  )
  @JoinTable({
    name: 'orders_with_products',
    joinColumn: {
      name: 'product_id'
    },
    inverseJoinColumn: {
      name: 'order_id'
    }
  })
  orders: OrderEntity[]
}