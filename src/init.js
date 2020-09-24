'use strict';

import { shortBreakHandler, timeHandler } from './timeHandler.js';

console.log('hello');

const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', timeHandler);
const shortBreak=document.getElementById('short-break');
shortBreak.addEventListener('click',shortBreakHandler);
