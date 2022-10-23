import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @Length(3, 255)
  name: string;

  @IsString()
  category: string;

  @IsInt()
  price: number;

  @IsInt()
  promo_price: number;

  @IsBoolean()
  in_stock: boolean;

  @IsString()
  description: string;

  @IsString()
  features: string[];

  @IsString()
  image: string;

  @IsString()
  overview: string;

  @IsString()
  additional_info: string;

  @IsInt()
  review_id: number;
}
