import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    userId?: string;
  title?: string;
  description?: string;
  dueDate?: string;
  priority?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  categoryId?: string;
}
