const eleGrid = document.querySelector('.grid');

for (let i = 1; i <= 1000; i++) {

	if (i % 15 == 0) {
		console.log('FizzBuzz');
		eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell cell_15">FizzBuzz</div>`;
	}
	else if (i % 3 == 0) {
		console.log('Fizz');
		eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell cell_3">Fizz</div>`;
	}
	else if (i % 5 == 0) {
		console.log('Buzz');
		eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell cell_5">Buzz</div>`;
	}
	else {
		console.log(i);
		eleGrid.innerHTML = eleGrid.innerHTML + `<div class="cell">${i}</div>`;
	}

}