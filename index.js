const removeToDo = e => {
	e.target.parentNode.remove();
}
const completeToDo = e => {
	if (!e.target.getAttribute('aria-checked')) {
		e.target.setAttribute('aria-checked', 'true');
	}
	else {
		e.target.setAttribute('aria-checked', 'false');
	}
}

const addToDo = e => {
	e.preventDefault();
	let item = document.createElement('li');
	item.innerText = document.querySelector('#item').value;
	item.addEventListener("click", completeToDo);

	let button = document.createElement('button');
	button.innerText = 'x';
	button.addEventListener("click", removeToDo);
	item.append(button);
	
	let list = document.querySelector('ul');
	list.appendChild(item);
}


document.querySelector('form').addEventListener('submit', addToDo)
