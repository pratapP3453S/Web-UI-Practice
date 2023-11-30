let todoTaskList = [{}];

function clickB(){
  let todoInput = document.querySelector('#input-todo').value;
  let dateInput = document.querySelector('#input-date').value;
  if(todoInput === ''){return alert('Please Input ToDo.')}
  else if(dateInput === ''){return alert('Please Input Date.')}
  else{addTodo();}
}

function addTodo(){
  let todoInput = document.querySelector('#input-todo');
  let dateInput = document.querySelector('#input-date');
  let todoDate = dateInput.value;
  let todoTask = todoInput.value;
  todoTaskList.push({task:todoTask, date:todoDate});
  todoInput.value = '';
  dateInput.value = '';
  showList();
}

function showList(){
  let container = document.querySelector('#task-container');
  let newHtml='';
  for(let i=1;i<todoTaskList.length;i++){
    let {task,date} = todoTaskList[i];
    newHtml += `
<span id="spanvalue">${task}</span>
<span id="spandate">${date}</span>
<button id="delete-button" onclick='todoTaskList.splice(${i},1); showList();'>Delete</button>
  `
  }
  container.innerHTML = newHtml;
}