import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  private counter_id = 1;
  private tasks: Task[] = [];
  create(createTaskDto: CreateTaskDto) {
    this.counter_id++;
    const newTask = {
      id: this.counter_id,
      ...createTaskDto,
    };
    this.tasks.push(newTask);
    return newTask;
  }

  findAll() {
    return this.tasks;
  }

  findOne(id: number) {
    return this.tasks.find((task) => task.id === id);
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      return null;
    }
    const updatedTask = {
      ...this.tasks[taskIndex],
      ...updateTaskDto,
    };
    this.tasks[taskIndex] = updatedTask;
    return updatedTask;
  }

  remove(id: number) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      return null;
    }
    const deletedTask = this.tasks[taskIndex];
    this.tasks.splice(taskIndex, 1);
    return deletedTask;
  }
}
