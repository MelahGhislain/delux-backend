import { IsNotEmpty, IsString } from 'class-validator';

export class GetProductDto {
  @IsNotEmpty()
  @IsString()
  id: string;
}
