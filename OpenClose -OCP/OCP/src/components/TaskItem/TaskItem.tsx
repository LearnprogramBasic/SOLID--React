import { ListItem, Task } from '../../Interface/ListItem'; 


export class TaskItem implements ListItem {
  private task: Task;

  constructor(task: Task) {
    this.task = task;
  }

  render() {
    return <span>{this.task.title} - {this.task.completed ? 'Completada' : 'Pendiente'}</span>;
  }
}