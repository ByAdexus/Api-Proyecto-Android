import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {
    userId?: string;
name?: string;
color?: string;
createdAt?: Date;
updatedAt?: Date;
}
