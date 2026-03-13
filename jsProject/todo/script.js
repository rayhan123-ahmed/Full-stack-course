const todoInput =document.getElementById("todo-input");
const addTAskBtn =document.getElementById("add-task-btn");
const todoList=document.getElementById("todo-list");

let task = []

addTAskBtn.addEventListener('click',()=>{
    const textTask = todoInput.value.trim()
    if(textTask === '') return
     newTask = {
        id: Date.now(),
        text:textTask,
        isCompleted: false
    }
    task.push(newTask);
    console.log(task);
    
})