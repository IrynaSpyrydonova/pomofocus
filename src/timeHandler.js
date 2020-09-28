import { CountDownTimer } from './time.js';

const displayCount = document.getElementById('timer-string');
const progressBar = document.getElementById('progress-bar');
const pomoDoro = document.getElementById('pomodoro');
let newCount;
let state = [];

const ButtonClickSound = new Audio('../../public/assets/sound/button.mp3');

export const shortBreakHandler = (event) => {
	newCount = new CountDownTimer(300, displayCount, progressBar);
	state.push(newCount);
};
if ((pomoDoro.className = 'time-btn-active')) {
	newCount = new CountDownTimer(1500, displayCount, progressBar);
	state.push(newCount);
}
export const longBreakHandler = (event) => {
	newCount = new CountDownTimer(900, displayCount, progressBar);
	state.push(newCount);
};
export const pomoDoroHandler = (event) => {
	newCount = new CountDownTimer(1500, displayCount, progressBar);
	state.push(newCount);
};

export const timeHandler = (event) => {
	const list = [...event.target.parentElement.children[0].children];

	for (let item of list) {
		if (item.classList.contains('time-btn-active')) {
			if (event.target.innerHTML === 'START') {
				event.target.innerHTML = 'STOP';
				newCount.start();
				ButtonClickSound.play();
			} else {
				event.target.innerHTML = 'START';
				newCount.pause();
				ButtonClickSound.play();
			}
		}
	}
};

export const changeActive = (event) => {
	const btn = event.target.parentElement.parentElement.children[2];
	if (state.length > 0) {
		state.forEach((item) => {
			item.clear();
			btn.innerHTML = 'START';
		});
	}
};
