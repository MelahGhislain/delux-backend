import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductDto } from './dto/get-product';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.entity';
import { ProductRepository } from './product.repository';

// Product servive to handle all logic of a product
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: ProductRepository,
  ) {}

  // @func: createProduct
  // @desc: create a new product
  // @params (newProduct: CreateProductDto)
  // @return Promise<Product>
  async createNewProduct(newProduct: CreateProductDto): Promise<Product> {
    return await this.productRepository.save(newProduct);
  }

  // @func: findAll
  // @desc: returns all products
  // @params ()
  // @return Promise<Product[]>
  findAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  // @func: findOne
  // @desc: returns a single product base on the product id
  // @params (id: string)
  // @return Promise<Product>
  findOne(id: string): Promise<Product> {
    return this.productRepository.findOneBy({ id });
  }

  // async update(product: UpdateProductDto, id: string): Promise<Product> {
  //   return await this.productRepository.upsert(id, product);
  // }

  // @func: remove
  // @desc: deletes a product in the database based on the id
  // @params (id: string)
  // @return int
  async remove(id: string): Promise<void> {
    await this.productRepository.delete(id);
  }
}
