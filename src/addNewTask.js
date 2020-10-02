
export class NewTask {

  constructor(container, button){
    this.container = container;
    this.button = button;
    this.form;
    this.inputActivityTitle;
    this.inputEstPomodoro;
    this.noteValue;
    this.textArea;
  }

  render(){
    this.button.style.display = "none";
    const form = document.createElement('form');
    form.className = 'add-task-new-item';
    form.id = "form1";

    const addTaskWrapper =document.createElement('div');
    addTaskWrapper.className = "add-task-wrapper";
    form.appendChild(addTaskWrapper);

    const addTaskNew = document.createElement('div');
    addTaskNew.className = "add-task-new";
    addTaskWrapper.appendChild(addTaskNew);

    const aaddTaskItemWrapper1 = document.createElement('div');
    aaddTaskItemWrapper1.className = "add-task-item-wrapper";
    addTaskNew.appendChild(aaddTaskItemWrapper1);

    const estPomodorosWrapper = document.createElement('div');
    estPomodorosWrapper.className = "est_pomodoros-wrapper";
    aaddTaskItemWrapper1.appendChild(estPomodorosWrapper);

    const pomodorosWrapper = document.createElement('div');
    estPomodorosWrapper.className = "pomodoros-wrapper";
    estPomodorosWrapper.appendChild(pomodorosWrapper);

    const inputActivityTitle = document.createElement('input');
    inputActivityTitle.id = "input_activity_title";
    inputActivityTitle.type = 'text';
    inputActivityTitle.placeholder = "What are you working on?";
    inputActivityTitle.value = '';
    inputActivityTitle.className = 'dbutPp';
    this.inputActivityTitle = inputActivityTitle;
    pomodorosWrapper.appendChild(inputActivityTitle);

    const aaddTaskItemWrapper2 = document.createElement('div');
    aaddTaskItemWrapper2.className = "add-task-item-wrapper";
    addTaskNew.appendChild(aaddTaskItemWrapper2);

    const estPomodorosWrapper2 = document.createElement('div');
    estPomodorosWrapper2.className = "est_pomodoros-wrapper";
    aaddTaskItemWrapper2.appendChild(estPomodorosWrapper2);

    const pomodorosWrapper2 = document.createElement('div');
    estPomodorosWrapper2.className = "pomodoros-wrapper";
    estPomodorosWrapper2.appendChild(pomodorosWrapper2);

    const warpperMb = document.createElement('div');
    warpperMb.className = "warpper-mb";
    pomodorosWrapper2.appendChild(warpperMb);

    const spanPomodoro = document.createElement('span');
    spanPomodoro.className = "span_pomodoro";
    spanPomodoro.innerHTML = 'Est Pomodoros';
    warpperMb.appendChild(spanPomodoro);

    const inputEstPomodoro =document.createElement('input');
    inputEstPomodoro.id = "input_est_pomodoro";
    inputEstPomodoro.type = 'number';
    inputEstPomodoro.min = '0';
    inputEstPomodoro.step = '1';
    inputEstPomodoro.className = "input_est_pomodoro";
    inputEstPomodoro.value = '1';
    pomodorosWrapper2.appendChild(inputEstPomodoro);
    this.inputEstPomodoro = inputEstPomodoro;

    const caretUp = document.createElement('button');
    caretUp.id ="caretUp";
    caretUp.className = "caret";
    pomodorosWrapper2.appendChild(caretUp);

    const caretUpIMG = document.createElement('img');
    caretUpIMG.className = "imgCaret";
    caretUpIMG.src = "./public/assets/icons/caret-up.png";
    caretUp.appendChild(caretUpIMG);
    caretUp.addEventListener('click', this.increaseValue);

    const caretDown = document.createElement('button');
    caretDown.id ="caretDown";
    caretDown.className = "caret";
    pomodorosWrapper2.appendChild(caretDown);

    const caretDownIMG = document.createElement('img');
    caretDownIMG.className = "imgCaret";
    caretDownIMG.src = "./public/assets/icons/caret-down.png"
    caretDown.appendChild(caretDownIMG);
    caretDown.addEventListener('click', this.decreaseValue);

    const aaddTaskItemWrapper3 = document.createElement('div');
    aaddTaskItemWrapper3.className = "add-task-item-wrapper";
    aaddTaskItemWrapper3.id = "addFeatures";
    addTaskNew.appendChild(aaddTaskItemWrapper3);

    const div = document.createElement('div');
    aaddTaskItemWrapper3.appendChild(div);

    const addNote = document.createElement('button');
    addNote.id = "addNote";
    addNote.className = "addNote";
    addNote.innerHTML = '+ Add Note';
    div.appendChild(addNote);
    addNote.addEventListener('click', this.addnoteHandler)
    

    const addProject = document.createElement('button');
    addProject.id = "addProject";
    addProject.className = "addProject";
    addProject.innerHTML = '+ Add Project';
    div.appendChild(addProject);

    const addProjectImg = document.createElement('img');
    addProjectImg.className = "addProject_img";
    addProjectImg.src = "./public/assets/icons/lock-black.png";
    addProject.appendChild(addProjectImg);

    const actionBtns2 = document.createElement('div');
    actionBtns2.className = `actionBtns`;
    form.appendChild(actionBtns2);

    const cancelBtn = document.createElement('button');
    cancelBtn.className = "cancelBtn";
    cancelBtn.innerHTML = 'Cancel';
    cancelBtn.id = "cancel";
    cancelBtn.addEventListener('click', this.cancel);
    actionBtns2.appendChild(cancelBtn);

    const saveBtn = document.createElement('button');
    saveBtn.className = "submitBtn";
    saveBtn.innerHTML = "Save";
    saveBtn.id = "save";
    actionBtns2.appendChild(saveBtn);
    this.saveBtn = saveBtn;

    form.addEventListener('submit', this.addNewItemHandler);
    form.addEventListener('input', this.addNewItemHandler);

    this.form = form;
    this.container.appendChild(this.form);
    return form;
  }

  cancel = ()=> {
    this.button.style.display = "flex";
    this.form.remove()
  }

  addNewItemHandler = (event) => {
    event.preventDefault();
    if (this.inputActivityTitle.value === "") {
      this.saveBtn.disabled = true;
      this.saveBtn.setAttribute("style", "background-color: rgb(195, 195, 195);");
    } else {
      this.saveBtn.disabled = false;
      this.saveBtn.setAttribute("style", "background-color: rgb(34, 34, 34);");
      this.saveBtn.addEventListener('click',this.submitBtn);
    }  
  }

  increaseValue = (event) => {
    this.inputEstPomodoro.value++
  }
  
  decreaseValue = (event) => {
    if(this.inputEstPomodoro.value <= 0){
      return;
    }
    this.inputEstPomodoro.value--;
  }

  submitBtn = (event) => {
  
    console.log('new task name: ', this.inputActivityTitle.value);
    console.log('number of est pomodoros:', this.inputEstPomodoro.value);
    const noteValue = document.getElementById('textarea');
    if(document.body.contains(noteValue)){
      console.log('notes for new task: ',noteValue.value);
      noteValue.value = "";
      this.noteValue = noteValue;
      this.textArea.style.display ='none';
    }
    this.inputActivityTitle.value = "";
    document.querySelector('.board').style.display = 'block';
  }

  addnoteHandler = (event) => {
    const textArea = document.createElement('textarea');
    textArea.id = 'textarea'
    document.getElementById('addFeatures').prepend(textArea);
    document.getElementById('addNote').style.display="none";
    this.textArea = textArea;
    return textArea;
  }
  
}











