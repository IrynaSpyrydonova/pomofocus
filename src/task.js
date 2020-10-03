import { addNewTask } from "./addNewTasHandler.js";

export class Task{

constructor(title,note,numberPomodoros){
    this.title=title;
    this.note=note;
    this.status=false;
    this.numberPomodoros=numberPomodoros;
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
render(){
    let divList=document.querySelector('.task-container');
    const titleTask =document.createElement('div');
    
    const numberPromo=document.createElement('span');
    titleTask.innerText=this.title;
    const button=document.createElement('img');
    button.addEventListener('click',this.affiche);
    button.src="./../public/assets/icons/vertical-ellipsis.png"
    button.className='button-task';
    titleTask.appendChild(button);
    numberPromo.className='number';
    numberPromo.innerText=this.numberPomodoros;
    titleTask.appendChild(numberPromo);
    if(this.note!==null){
    const noteTask=document.createElement('p');
    noteTask.innerText=this.note.value;
    titleTask.appendChild(noteTask);
    }
    titleTask.className='task-List'
    divList.appendChild(titleTask);

}
affiche(){
      const del=document.createElement('button');
      del.className='submitBtn'
    del.innerText='Delete';
    const div=document.querySelector('.task-List');
    div.appendChild(del);
}
}