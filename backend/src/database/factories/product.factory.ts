import { setSeederFactory, useSeederFactory, } from 'typeorm-extension';
import { ProductEntity } from '../../products/entities/product.entity';
import { CategoryEntity } from '../../categories/entities/category.entity';

export default setSeederFactory(ProductEntity, async (faker) => {
  const product = new ProductEntity();

  product.title = faker.commerce.productName();
  product.description = faker.commerce.productDescription();
  product.category = await useSeederFactory(CategoryEntity).make()

  return product;
})