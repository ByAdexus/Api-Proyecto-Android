import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task, TaskDocument } from './schemas/task.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  create(createTaskDto: CreateTaskDto) {
    // Convertir cadenas de fecha a objetos Date
    const taskData = {
      ...createTaskDto,
      dueDate: new Date(createTaskDto.dueDate),
      createdAt: new Date(createTaskDto.createdAt),
      updatedAt: new Date(createTaskDto.updatedAt),
    };
    return this.taskModel.create(taskData);
  }

  async findAll() {
    const tasks = await this.taskModel.find().exec();
    return tasks;
  }

  findOne(id: string): Promise<Task> {
    return this.taskModel.findById(id).exec();
  }

  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    // Convertir cadenas de fecha a objetos Date
    const updatedData = {
      ...updateTaskDto,
      dueDate: updateTaskDto.dueDate ? new Date(updateTaskDto.dueDate) : undefined,
      createdAt: updateTaskDto.createdAt ? new Date(updateTaskDto.createdAt) : undefined,
      updatedAt: new Date(), // Actualizar siempre a la fecha actual
    };

    const existingTask = await this.taskModel.findByIdAndUpdate(
      id, 
      updatedData,
      { new: true } // Return the modified document
    ).exec();

    if (!existingTask) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }

    return existingTask;
  }

  async remove(id: string): Promise<Task> {
    const deletedTask = await this.taskModel.findByIdAndDelete(id).exec();
    if (!deletedTask) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return deletedTask;
  }
}
