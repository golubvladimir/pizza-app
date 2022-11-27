import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryEntity } from '../../categories/entities/category.entity';

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
  category: CategoryEntity
}