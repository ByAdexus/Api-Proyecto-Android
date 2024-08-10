import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  userId?: string;
  title?: string;
  description?: string;
  dueDate?: Date;          // Cambiado a Date
  priority?: string;
  status?: string;
  createdAt?: Date;        // Cambiado a Date
  updatedAt?: Date;        // Cambiado a Date
  categoryId?: string;
}
