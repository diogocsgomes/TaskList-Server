import { Controller , Get, Post,Put, Body,Param} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from 'src/entities/task/task';
import { Logger } from '@nestjs/common';


@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

  @Get('gettasks')
  findAll() {
    return this.taskService.findAll();
  }
  @Get("teste")
  test(){

    this.taskService.test();

    return "sou uma maquina";
  }

  @Post()
  create(@Body() data: { taskName: string, toDo:boolean }) {
    return this.taskService.create(data);
  }

  @Put('/changeToDone')
  async changeToDone( @Body() updateData: any){

    
    
    return this.taskService.changeToDone(updateData.id);
  }


  @Put('/changeToUndone')
  async changeToUndone(@Body() updateData: any)
  {
    return this.taskService.changeToUndone(updateData.id);
  }



}
