export class CreateTaskDto {
  userId: string;
  title: string;
  description: string;
  dueDate: Date;         // Cambiado a Date
  priority: string;
  status: string;
  createdAt: Date;       // Cambiado a Date
  updatedAt: Date;       // Cambiado a Date
  categoryId: string;
}
