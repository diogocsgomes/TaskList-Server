import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from 'src/entities/task/task';

@Module({
  imports: [TypeOrmModule.forFeature([Task])], // Import TypeOrmModule for the Task entity

  providers: [TaskService],
  controllers: [TaskController]
})
export class TaskModule {}
