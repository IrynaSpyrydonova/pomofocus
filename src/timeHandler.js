import { CountDownTimer } from './time.js';

const displayCount = document.getElementById('timer-string');
const progressBar = document.getElementById('progress-bar');
const pomoDoro=document.getElementById('pomodoro');
let newCount;
let state = [];

export const shortBreakHandler=(event)=>{
    const shortBreak=document.getElementById('short-break');
    const allButton=document.querySelectorAll('.time-btn-active');
    allButton.forEach(element=>element.className='time-btn');
    shortBreak.className='time-btn-active';
     newCount = new CountDownTimer(300, displayCount, progressBar);
     state.push(newCount);
}
	if(pomoDoro.className='time-btn-active'){
     newCount = new CountDownTimer(1500, displayCount, progressBar);
     state.push(newCount);
	}
	export const longBreakHandler=(event)=>{
    const  LongBreak=document.getElementById('long-break');
    const allButton=document.querySelectorAll('.time-btn-active');
    allButton.forEach(element=>element.className='time-btn');
	LongBreak.className='time-btn-active';
     newCount = new CountDownTimer(900, displayCount, progressBar);
     state.push(newCount);
}
export const pomoDoroHandler=(event)=>{
    const  pomoDoro=document.getElementById('pomodoro');
    const allButton=document.querySelectorAll('.time-btn-active');
    allButton.forEach(element=>element.className='time-btn');
	pomoDoro.className='time-btn-active';
     newCount = new CountDownTimer(1500, displayCount, progressBar);
     state.push(newCount);
};


export const timeHandler = (event) => {
	const list = [...event.target.parentElement.children[0].children];

	for (let item of list) {
		if(item.classList.contains('time-btn-active')){
			if (event.target.innerHTML === 'START') {
				event.target.innerHTML = 'STOP';
				newCount.start(this);
			} else {
				event.target.innerHTML = 'START';
				newCount.pause(this);
			}
		} 
		
}
};


export const changeActive = (event) => {
	const btn = event.target.parentElement.parentElement.children[2];
	if(state.length>0){
		state.forEach(item => {
			item.clear();
			btn.innerHTML = "START"
		})
	}
}

