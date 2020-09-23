import { CountDownTimer } from './time.js';

const displayCount = document.getElementById('timer-string');
const progressBar = document.getElementById('progress-bar');
const newCount = new CountDownTimer(1500, displayCount, progressBar);
export const timeHandler = (event) => {
	if (event.target.innerHTML === 'START') {
		event.target.innerHTML = 'STOP';
		newCount.start(this);
	} else {
		event.target.innerHTML = 'START';
		newCount.pause(this);
	}
};
