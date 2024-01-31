'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 30;

// document.querySelector('.guess').value = 33;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
	document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value);
	console.log(guess, typeof guess);

	if (!guess) {
		// document.querySelector('.message').textContent = '⛔ No number';
		displayMessage('⛔ No number');

		// When player win
	} else if (guess === secretNumber) {
		// document.querySelector('.message').textContent = '🎉 Correct number!';
		displayMessage('🎉 Correct number!');
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('body').style.backgroundColor = '#40c057';
		document.querySelector('.number').style.width = '30rem';

		if (score > highscore) {
			highscore = score;
			document.querySelector('.highscore').textContent = highscore;
		}
	}
	// When guess is wrong
	else if (guess !== secretNumber) {
		if (score > 1) {
			// document.querySelector('.message').textContent = guess > secretNumber ? '📈 Number is too high!' : '📉 Number is too low';
			displayMessage(guess > secretNumber ? '📈 Number is too high!' : '📉 Number is too low');
			score--;
			document.querySelector('.score').textContent = score;
		} else {
			// document.querySelector('.message').textContent = '💥 You are lose';
			displayMessage('💥 You are lose');
			document.querySelector('.score').textContent = 0;
		}
	}

	// //when guess is too high
	// else if (guess > secretNumber) {
	// 	if (score > 1) {
	// 		document.querySelector('.message').textContent = '📈 Number is too high!';
	// 		score--;
	// 		document.querySelector('.score').textContent = score;
	// 	} else {
	// 		document.querySelector('.message').textContent = '💥 You are lose';
	// 		document.querySelector('.score').textContent = 0;
	// 	}
	// 	//when guess is too low
	// } else if (guess < secretNumber) {
	// 	if (score > 1) {
	// 		document.querySelector('.message').textContent = '📉 Number is too low';
	// 		score--;
	// 		document.querySelector('.score').textContent = score;
	// 	} else {
	// 		document.querySelector('.message').textContent = '💥 You are lose';
	// 		document.querySelector('.score').textContent = 0;
	// 	}
	// }
});

document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	document.querySelector('.score').textContent = score;

	secretNumber = Math.trunc(Math.random() * 20) + 1;
	document.querySelector('.number').textContent = '?';

	document.querySelector('.guess').value = '';
	// document.querySelector('.message').textContent = 'Start guessing...';
	displayMessage('Start guessing...');
	document.querySelector('.number').style.width = '15rem';
	document.querySelector('body').style.backgroundColor = '#212529';
});