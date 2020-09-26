import { CountDownTimer } from './time.js';

const displayCount = document.getElementById('timer-string');
const progressBar = document.getElementById('progress-bar');
const pomoDoro=document.getElementById('pomodoro');
let newCount;

export const shortBreakHandler=(event)=>{
    const shortBreak=document.getElementById('short-break');
    const allButton=document.querySelectorAll('.time-btn-active');
    allButton.forEach(element=>element.className='time-btn');
    shortBreak.className='time-btn-active';
     newCount = new CountDownTimer(300, displayCount, progressBar);
}
	if(pomoDoro.className='time-btn-active'){
	 newCount = new CountDownTimer(1500, displayCount, progressBar);
	}
	export const longBreakHandler=(event)=>{
    const  LongBreak=document.getElementById('long-break');
    const allButton=document.querySelectorAll('.time-btn-active');
    allButton.forEach(element=>element.className='time-btn');
	LongBreak.className='time-btn-active';
     newCount = new CountDownTimer(900, displayCount, progressBar);
}
export const pomoDoroHandler=(event)=>{
    const  pomoDoro=document.getElementById('pomodoro');
    const allButton=document.querySelectorAll('.time-btn-active');
    allButton.forEach(element=>element.className='time-btn');
	pomoDoro.className='time-btn-active';
     newCount = new CountDownTimer(1500, displayCount, progressBar);
};
export const timeHandler = (event) => {
	if (event.target.innerHTML === 'START') {
		event.target.innerHTML = 'STOP';
		newCount.start(this);
	} else {
		event.target.innerHTML = 'START';
		newCount.pause(this);
	}
};
