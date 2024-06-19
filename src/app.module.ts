import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TasksModule, CategoriesModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
