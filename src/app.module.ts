import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Task } from './entities/task/task';//Entitys task
import { TaskController } from './task/task.controller';

@Module({
  imports: [
    TaskModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite', // Path to your SQLite database file
      entities: [Task], // List your entities here
      synchronize: true, // Automatically syncs schema (set to false in production)
    }),
    TaskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
