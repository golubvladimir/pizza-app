import { setSeederFactory, useSeederFactory } from 'typeorm-extension';
import { CategoryEntity } from '../../categories/entities/category.entity';

export default setSeederFactory(CategoryEntity, async (faker) => {
  console.log('category_factory');

  const category = new CategoryEntity();

  category.title = faker.commerce.productName();
  category.description = faker.commerce.productDescription();

  return category;
})