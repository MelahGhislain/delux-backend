import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOrderDto {
  id: string;

  @IsNotEmpty()
  @IsString()
  userID: string;

  @IsNotEmpty()
  @IsString()
  orderID: string;

  @IsNotEmpty()
  @IsString()
  cartID: string;

  @IsNotEmpty()
  @IsString()
  status: string;
}
