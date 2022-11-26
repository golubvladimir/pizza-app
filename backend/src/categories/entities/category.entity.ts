import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from '../../products/entities/product.entity';

@Entity({
  name: 'categories'
})
export class CategoryEntity {

  @PrimaryGeneratedColumn({
    name: 'id'
  })
  id: string;

  @Column({
    name: 'name'
  })
  name: string;

  @Column({
    name: 'description'
  })
  description: string;

  @OneToMany(() => ProductEntity, (product) => product.category)
  products: ProductEntity[]
}