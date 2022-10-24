import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: ProductRepository,
  ) {}

  async createNewProduct(newProduct: CreateProductDto): Promise<Product> {
    return await this.productRepository.save(newProduct);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  findOne(id: string): Promise<Product> {
    return this.productRepository.findOneBy({ id });
  }

  //   async update(): Promise<Product> {
  //     await this.productRepository.delete(producId);
  //   }

  async remove(id: string): Promise<void> {
    await this.productRepository.delete(id);
  }
}
