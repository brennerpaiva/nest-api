import { Task } from 'src/task/entities/task.entity';

export class User {
  name: string;
  email: string;
  password: string;
  tasks?: Array<Task>;
}
