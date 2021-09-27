

var taskToDoEl= document.querySelector("#task-to-do");
var formEl = document.querySelector("#task-form");

function createTaskHandler (event) {
	event.preventDefault(); 
	
	var listItemEl = document.createElement ("li");
	listItemEl.className = "task-item";
	listItemEl.textContent = "This is a new task";
	taskToDoEl.appendChild(listItemEl);
};




formEl.addEventListener( "click" ,createTaskHandler);