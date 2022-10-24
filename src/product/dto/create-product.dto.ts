import { IsArray, IsInt, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateProductDto {
  producId: string;

  @IsNotEmpty()
  @Length(3, 255)
  name: string;

  @IsString()
  @IsNotEmpty()
  categoryID: string;

  @IsInt()
  @IsNotEmpty()
  price: number;

  promo_price: number;

  in_stock: boolean;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  @IsNotEmpty()
  features: string[];

  @IsString()
  @IsNotEmpty()
  image: string;

  overview: string;

  additional_info: string;

  reviewID: string;

  createdDate: string;

  updatedDate: string;
}
