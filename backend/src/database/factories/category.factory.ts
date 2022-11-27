import { setSeederFactory, useSeederFactory } from 'typeorm-extension';
import { CategoryEntity } from '../../categories/entities/category.entity';

export default setSeederFactory(CategoryEntity, async (faker) => {
  console.log('category_factory');

  const product = new CategoryEntity();

  product.title = faker.commerce.productName();
  product.description = faker.commerce.productDescription();

  return product;
})