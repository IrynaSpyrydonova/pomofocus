'use strict';

import { timeHandler } from './timeHandler.js';

console.log('hello');

const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', timeHandler);
