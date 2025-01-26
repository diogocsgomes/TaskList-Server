import { Injectable } from '@nestjs/common';
import { Task } from 'src/entities/task/task';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {

    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>,
      ) {}


      findAll() {
        return this.taskRepository.find();
      }
    
      create(data: Partial<Task>) {
        const entity = this.taskRepository.create(data);
        return this.taskRepository.save(entity);
      }



}
