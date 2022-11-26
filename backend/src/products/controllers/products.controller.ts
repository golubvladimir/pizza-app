import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { ProductEntity } from '../entities/product.entity';

@Controller('products')
export class ProductsController {

  constructor(
    private readonly productsService: ProductsService
  ) {}

  @Get('/')
  getProductsAll() {
    return this.productsService.getAll();
  }

  @Get('/:category')
  getProductsByCategory(
    @Param('category') categoryName: string
  ): Promise<ProductEntity[]> {
    return this.productsService.getByCategory(categoryName);
  }
}