var removeCartItemButtons = document.querySelectorAll('.btn-delete');
var heartbuttons = document.querySelectorAll('.fa-heart');
var plusbuttons = document.querySelectorAll('.plus-btn');
var minusbuttons = document.querySelectorAll('.minus-btn');
var total = document.querySelector('.total');
console.log(Array.from(plusbuttons));
console.log(Array.from(removeCartItemButtons));
//remove button
Array.from(removeCartItemButtons).map((el) => {
	el.addEventListener('click', function() {
		el.parentElement.parentElement.remove();
	});
});
//heart button//does'nt wanna work

Array.from(heartbuttons).map((el) => {
	el.addEventListener('click', function() {
		el.classList.toggle('red');
	});
});

//minus and plus buttons

Array.from(plusbuttons).map((el) => {
	el.addEventListener('click', function() {
		el.nextElementSibling.innerHTML = parseInt(el.nextElementSibling.innerHTML) + 1;
		var price = el.parentElement.nextElementSibling.innerHTML.replace('$', '');
		console.log(price);
		total.innerHTML = parseInt(total.innerHTML.replace('$', '')) + parseInt(price) + '$';
	});
});

Array.from(minusbuttons).map((el) => {
	el.addEventListener('click', function() {
		if (el.previousElementSibling.innerHTML > 1)
			el.previousElementSibling.innerHTML = parseInt(el.previousElementSibling.innerHTML) - 1;
		var price = el.parentElement.nextElementSibling.innerHTML.replace('$', '');
		console.log(price);

		total.innerHTML = parseInt(total.innerHTML.replace('$', '')) - parseInt(price) + '$';
	});
});
