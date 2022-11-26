import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';
import { CategoriesModule } from '../categories/categories.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductEntity
    ]),
    CategoriesModule
  ],
  controllers: [
    ProductsController
  ],
  providers: [
    ProductsService
  ]
})
export class ProductsModule {}