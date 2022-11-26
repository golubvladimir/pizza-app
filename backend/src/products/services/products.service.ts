import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProjectConfigTsJest } from 'ts-jest';
import { ProductEntity } from '../entities/product.entity';
import { CategoriesService } from '../../categories/services/categories.service';

@Injectable()
export class ProductsService {

  constructor(
    private readonly productsRepository: Repository<ProductEntity>,
    private readonly categoriesService: CategoriesService
  ) {}

  getAll(): Promise<ProductEntity[]> {
    return this.productsRepository.find();
  }

  async getByCategory(categoryName: string) {
    const category = await this.categoriesService.getByName(categoryName);

    if (!category) {
      throw new NotFoundException()
    }

    return this.productsRepository.find({
      relations: {
        category: true,
      },
      where: {
        category: {
          id: category['id']
        }
      }
    });
  }
}