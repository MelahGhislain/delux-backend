import {
  Body,
  Controller,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('/create')
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  createProduct(@Body() createProductDto: CreateProductDto) {
    return createProductDto.name;
  }
}