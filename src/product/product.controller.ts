import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductDto } from './dto/get-product';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('/create')
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return await this.productService.createNewProduct(createProductDto);
  }

  @Get('/:id')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async getProduct(@Param('id') id: string) {
    return await this.productService.findOne(id);
  }

  @Get('/')
  @HttpCode(200)
  async getAllProducts() {
    return await this.productService.findAll();
  }

  // @Put('/:id')
  // @HttpCode(200)
  // async updateProduct(
  //   @Body() product: UpdateProductDto,
  //   @Param('id') id: string,
  // ) {
  //   return await this.productService.findAll();
  // }

  @Delete(':id')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async removeProduct(@Param('id') id: string) {
    return await this.productService.remove(id);
  }
}
