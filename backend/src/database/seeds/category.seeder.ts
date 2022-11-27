import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { CategoryEntity } from '../../categories/entities/category.entity';

export default class CategorySeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ): Promise<any> {
    console.log('category seed');

    const categoryFactory = await factoryManager.get(CategoryEntity);
    await categoryFactory.save();
  }
}