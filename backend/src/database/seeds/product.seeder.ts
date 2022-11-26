import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { ProductEntity } from '../../products/entities/product.entity';

export default class ProductSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    const productFactory = await factoryManager.get(ProductEntity);
    await productFactory.save();
  }
}