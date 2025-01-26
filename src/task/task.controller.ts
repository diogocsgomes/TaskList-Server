import { Controller , Get, Post, Body} from '@nestjs/common';
import { TaskService } from './task.service';


@Controller('task')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll() {
    return this.taskService.findAll();
  }
  @Get("teste")
  test(){
    return "sou uma maquina";
  }

  @Post()
  create(@Body() data: { taskName: string, toDo:boolean }) {
    return this.taskService.create(data);
  }
}
