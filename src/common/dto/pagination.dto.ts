/* eslint-disable prettier/prettier */

import { OrderStatus } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationDto {
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  page?: number = 1;

  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  limit?: number = 10;

  @IsOptional()
  status?: OrderStatus = OrderStatus.PENDING;
}
