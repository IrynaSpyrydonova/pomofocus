
import { NewTask } from './addNewTask.js';

const addBtn = document.querySelector('.add-task-container');
const taskContainer = document.querySelector('.task-container');

export const addNewTask = (event) => { 
    let newTaskContainer = new NewTask(taskContainer,addBtn );
     let renderNewTaskContainer = newTaskContainer.render();
 }
 