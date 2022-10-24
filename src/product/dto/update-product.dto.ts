import { IsArray, IsInt, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  name: string;

  categoryID: string;

  price: number;

  promo_price: number;

  in_stock: boolean;

  description: string;

  features: string[];

  image: string;

  overview: string;

  additional_info: string;

  reviewID: string;
}
