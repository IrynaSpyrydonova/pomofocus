import { addNewTask, taskContainer, addBtn } from "./addNewTasHandler.js";
import {NewTask} from "./addNewTask.js";

export class Task{

constructor(title,note,numberPomodoros){
    this.title=title;
    this.note=note;
    this.status=false;
    this.numberPomodoros=numberPomodoros;
    this.button;
}
setTitle(title){
    this.title=title;
}
setNote(note){
    this.note=note;
}
changeStatus(){
    if(status)this.status=false;
    else this.status =true;
}
setNumberPomodoros(number){
    this.numberPomodoros=number;
}
render =()=>{
    let divList=document.querySelector('.task-container');
    const titleTask =document.createElement('div');
    
    const numberPromo=document.createElement('span');
    titleTask.innerText=this.title;
    const button=document.createElement('img');
    button.addEventListener('click',this.affiche);
    button.src="./../public/assets/icons/vertical-ellipsis.png"
    button.className='button-task';
    this.button = button;
    titleTask.appendChild(button);
    numberPromo.className='number';
    numberPromo.innerText=this.numberPomodoros;
    titleTask.appendChild(numberPromo);
    if(this.note!==null){
        if(this.note!==""){
        const noteTask=document.createElement('p');
        noteTask.innerText=this.note;
        titleTask.appendChild(noteTask);
        }
    }
    titleTask.className='task-List'
    divList.appendChild(titleTask);

}
affiche = () => {
    const form = document.querySelector('form');
    if(document.contains(form)){
        form.remove();
        addBtn.style.display = "flex";
    };
    let changeTaskContainer = new NewTask(taskContainer, this.button);
    let renderNewTaskContainer = changeTaskContainer.render();
    changeTaskContainer.inputActivityTitle.value = this.title;
    changeTaskContainer.inputEstPomodoro.value = this.numberPomodoros;
    if(!this.note === ""){
        changeTaskContainer.textArea.value = this.note;
        changeTaskContainer.textArea.style.display = 'inline-block';
        renderNewTaskContainer.addNote.style.display = 'none';
    } else {
        changeTaskContainer.textArea.style.display = 'none';
        renderNewTaskContainer.addNote.style.display = 'inline-block';
    }
;

    const del=document.createElement('button');
    del.className='submitBtn'
    del.innerText='Delete';
    const div=document.querySelector('.actionBtns');
    div.appendChild(del);
}
}