import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    taskName: string;
  
    @Column()
    done: boolean; // a boolean


}
