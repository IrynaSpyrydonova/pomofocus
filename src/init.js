'use strict';

import { timeHandler } from './timeHandler.js';
import { changeBg } from './handeler/background.js';

const startBtn = document.getElementById('start-btn');
startBtn.addEventListener('click', timeHandler);

/*Change background color */
document.getElementsByClassName('time-btn-wrapper')[0].addEventListener('click', changeBg);
