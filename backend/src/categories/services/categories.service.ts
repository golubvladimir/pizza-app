import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CategoryEntity } from '../entities/category.entity';

@Injectable()
export class CategoriesService {

  constructor(
    private readonly categoryRepository: Repository<CategoryEntity>
  ) {}

  getByName(name: string) {
    return this.categoryRepository.findOne({
      where: {
        name: name
      }
    });
  }
}