// Add the reference to the "TodoInterface"
import { TodoInterface } from "./todoInterface";
// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
  tasks: [string] = [""];
  constructor() {}
  addTask(task: string) {
    if (task) {
      this.tasks.push(task);
    }
  }
  listAllTasks() {
    this.tasks.forEach(element => console.log(element));
  }
  deleteTask(task: string) {
    let deleteItem: number = this.tasks.indexOf(task);
    this.tasks.splice(deleteItem, 1);
  }
}
// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask("This is our first task"));
console.log("Number of items:", myTodos.addTask("Eat pizza 🍕 yummy!!!"));
console.log(
  "Number of items:",
  myTodos.addTask("Finish this iteration 1!! 🤓")
);
console.log(
  "Number of items:",
  myTodos.addTask("Finish this iteration 2!! 🤓")
);
console.log(
  "Number of items:",
  myTodos.addTask("Finish this iteration 3!! 🤓")
);
myTodos.listAllTasks();
console.log(
  "Number of items:",
  myTodos.deleteTask("Finish this iteration 1!! 🤓")
);
console.log(
  "Number of items:",
  myTodos.deleteTask("Finish this iteration 2!! 🤓")
);
myTodos.listAllTasks();
