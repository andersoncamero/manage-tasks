import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  private counter_id = 0;
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
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new NotFoundException(`Task with id ${id} not found`);
    }
    return this.tasks.find((task) => task.id === id);
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    const task = this.findOne(id);
    if (task) {
      const taskIndex = this.tasks.findIndex((task) => task.id === id);
      const updatedTask = {
        ...this.tasks[taskIndex],
        ...updateTaskDto,
      };
      this.tasks[taskIndex] = updatedTask;
      return updatedTask;
    }
    return null;
  }

  remove(id: number) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
      return null;
    }
    const deletedTask = this.tasks[taskIndex];
    this.tasks.splice(taskIndex, 1);
    return deletedTask.id;
  }
}
