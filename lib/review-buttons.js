'use strict';
// When deployed, this script injects a div at the top of your body with testing/review buttons

import { logger } from './logger.js';

{
	const validateContainer = document.createElement('div');
	validateContainer.style = 'text-align: center;  background-color: rgb(240, 91, 86);';
	validateContainer.id = 'validator';
	validateContainer.style.transition = 'background-color 0.5s ease-in-out 0s';

	const logLogs = document.createElement('button');
	// how would you label this button with ARIA?
	logLogs.innerHTML = 'log the logs';
	logLogs.onclick = () => console.log('logs:', logger.logs);
	validateContainer.appendChild(logLogs);

	const monkeyTest = document.createElement('button');
	monkeyTest.innerHTML = 'unleash the gremlins';
	const buttonClicker = ({ logger, randomizer, window }) => {
		return () => {
			const buttonEls = document.getElementsByTagName('button');
			const buttonInputs = document.querySelectorAll('[type="button"]');
			const buttons = [...Array.from(buttonEls), ...Array.from(buttonInputs)];
			if (buttons.length > 0) {
				const randomButton = buttons[Math.floor(Math.random() * buttons.length)];
				randomButton.dispatchEvent(new Event('focus'));
				randomButton.dispatchEvent(new MouseEvent('click'));
				randomButton.dispatchEvent(new Event('blur'));
			}
		};
	};
	const inputClearer = ({ logger, randomizer, window }) => {
		return () => {
			const inputs = document.getElementsByTagName('input');
			for (const input of inputs) {
				if (input.type === 'button') {
					continue;
				}
				input.value = '';
			}
		};
	};
	monkeyTest.onclick = () => {
		document.body.removeChild(validateContainer);
		const horde = gremlins.createHorde({
			mogwais: [],
			species: [gremlins.species.formFiller(), gremlins.species.clicker(), buttonClicker, inputClearer, gremlins.species.typer(), gremlins.species.scroller()],
			strategies: [
				gremlins.strategies.distribution({
					distribution: [0.3, 0.29, 0.2, 0.1, 0.1, 0.01],
					delay: 10,
					nb: 200,
				}),
			],
		});
		horde.unleash();
		setTimeout(() => {
			horde.stop();
			document.body.insertBefore(validateContainer, document.body.firstChild);
		}, 2000);
	};
	validateContainer.appendChild(monkeyTest);
	document.body.insertBefore(validateContainer, document.body.firstChild);

	// const testApp = document.createElement('button');
	// testApp.innerHTML = 'run app tests';
	// testApp.onclick = () => import('../src/app.spec.js');
	// validateContainer.appendChild(testApp);

	if (!window.location.href.includes('localhost') && window.location.href.includes('http')) {
		const validateHTML = document.createElement('button');
		validateHTML.innerHTML = 'validate HTML';
		validateHTML.onclick = () => window.open('https://validator.w3.org/nu/?doc=' + encodeURIComponent(window.location.href), '_blank');
		validateContainer.appendChild(validateHTML);

		const validateCSS = document.createElement('button');
		validateCSS.innerHTML = 'validate CSS';
		validateCSS.onclick = () => window.open('https://jigsaw.w3.org/css-validator/validator?uri=' + encodeURIComponent(window.location.href), '_blank');
		validateContainer.appendChild(validateCSS);

		const developmentStrategyButton = document.createElement('button');
		developmentStrategyButton.innerHTML = 'development strategy';
		const developmentStrategyA = document.createElement('a');
		developmentStrategyA.href = './project-planning/development-strategy';
		developmentStrategyA.target = '_blank';
		developmentStrategyA.appendChild(developmentStrategyButton);
		validateContainer.appendChild(developmentStrategyA);
	}
}
