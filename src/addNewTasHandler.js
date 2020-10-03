
import { NewTask } from './addNewTask.js';

export const addBtn = document.querySelector('.add-task-container');
export const taskContainer = document.querySelector('.task-container');


export const addNewTask = (event) => { 
    let newTaskContainer = new NewTask(taskContainer,addBtn );
     let renderNewTaskContainer = newTaskContainer.render();
 }