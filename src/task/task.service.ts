import { Injectable, Logger } from '@nestjs/common';
import { Task } from 'src/entities/task/task';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {

  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) { }


  findAll() {
    return this.taskRepository.find();
  }

  create(data: Partial<Task>) {
    const entity = this.taskRepository.create(data);
    return this.taskRepository.save(entity);
  }

  async changeToDone(id: number) {
    // Update task where ID matches and set toDo to false
    //Logger.log('olaaaa');
    const result = await this.taskRepository.query(
      'UPDATE task set done = ? WHERE id = ?',
      [true, id]
    );

   

    return { message: 'Task updated successfully' };
  }


  async changeToUndone(id:number){
    const result = await this.taskRepository.query(
      'UPDATE task set done = ? WHERE id = ?',
      [false, id]
    );

   

    return { message: 'Task updated successfully' };
  }


  async deleteTask(id: number){
    const result = await this.taskRepository.query('DELETE FROM task where id = ?',[id]);
    Logger.log('I came here to delete somethin' + id);
    return {message: result + ' rows deleted'};
  }
  async addTask(taskName: string){
    Logger.log("I want to add " + taskName);
    const result = await this.taskRepository.query('INSERT INTO task (taskName, done) values (? , false)',[taskName]);
    return {message: result };
  }



  async test() {
    Logger.log('ola mundo');
    await this.taskRepository.query('UPDATE task set done = ? WHERE id = ?',
      [true, 1]
    );
  }



}
