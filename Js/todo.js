const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KET = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KET, JSON.stringify(toDos));
    // JSON.stringify(value, replacer, space): Value 값을 JSON 문자"열"로 변환
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    // filter function gives new array
    // array.filter(condition): array에서 조건을 충족하지 못하는 인수(false)를 "제외"하고 새로운 array을 생성  
    // toDo: filter function의 "argument" : toDos(DB)에 있는 요소 중 하나
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    // toDos.id(= Number), li.id(= String) → parseInt(li.id): 문자열을 숫자로 변환
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌"
    button.addEventListener("click", deleteTodo);
    li.appendChild(button);
    li.appendChild(span);
    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(), // Date.now(): ms(millisecond)를 제공 → 랜덤한 id 생성
    };
    toDos.push(newTodoObj); // array.push(object): 오브젝트를 배열의 마지막 요소로 push
    paintToDo(newTodoObj);
    saveToDos();    
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KET);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    // JSON string을 javascript 객체로 변환
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    // array.forEach(function): array에 있는 각각의 item에 대해 function을 실행시킴
} 

