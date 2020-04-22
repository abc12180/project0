const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let num = 0; 													// Can not be a const becuase of the num++;

function newTodo() {
	let input = prompt("Please your TODO", "");
	if(input === '') return alert('Can not be blank');

	let cb = document.createElement('span');
	let todotext = document.createElement('span');
	let tododelete = document.createElement('span');
	let li = document.createElement('li');

	num++;
	li.id = "item_" + num;
	cb.id = "cb_" + num;

	cb.className = classNames.TODO_CHECKBOX;
	todotext.className = classNames.TODO_TEXT;
	tododelete.className = classNames.TODO_DELETE;
	li.className = classNames.TODO_ITEM;


	cb.innerHTML = "<input type='checkbox' onChange='checkchange(this)'>";
	todotext.innerHTML = input;
	tododelete.innerHTML = "<input type='button' value='Delete' onClick='deletetodo(num);'>";

	li.appendChild(cb);
	li.appendChild(todotext);
	li.appendChild(tododelete);
	list.appendChild(li);

        itemCountSpan.innerText = parseInt(itemCountSpan.innerText) + 1;					// Without the parseInt we get a binary result
        uncheckedCountSpan.innerText = parseInt(uncheckedCountSpan.innerText) + 1;				// Perhaps store this value seperately instead of getting it from the UI?

}
function checkchange(target) {
	if(target.checked) {
		uncheckedCountSpan.innerText = parseInt(uncheckedCountSpan.innerText) - 1;
	}
	else {
		uncheckedCountSpan.innerText = parseInt(uncheckedCountSpan.innerText) + 1;
	}
}
function deletetodo(id) {
	let target = document.getElementById('item_' + id);
	itemCountSpan.innerText = parseInt(itemCountSpan.innerText) - 1;
	let cbtarget = document.getElementById('cb_' + id).firstChild;
	if(!cbtarget.checked) {
		uncheckedCountSpan.innerText = parseInt(uncheckedCountSpan.innerText) - 1;
	}
	target.parentNode.removeChild(target);
}
