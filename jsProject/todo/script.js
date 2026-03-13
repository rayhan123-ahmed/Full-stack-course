document.addEventListener('DOMContentLoaded',()=>{
    const todoInput = document.getElementById("todo-input");
    const addTAskBtn = document.getElementById("add-task-btn");
    const todoList = document.getElementById("todo-list");

    let tasks =JSON.parse(localStorage.getItem('task')) || [];
     tasks.forEach((task => renderTask(task)))

    addTAskBtn.addEventListener("click", () => {
      const textTask = todoInput.value.trim();
      if (textTask === "") return;
      newTask = {
        id: Date.now(),
        text: textTask,
        isCompleted: false,
      };
      tasks.push(newTask);
      renderTask(newTask);
      saveTask();
      todoInput.value = "";
      console.log(tasks);
    });

    function renderTask(task) {
    const li = document.createElement('li')
    li.dataset.id = task.id;

    li.innerHTML = `
     <span>${task.text}</span>
     <button class = "delete-btn">Delete</button>
    `;
    todoList.append(li)
    }
    
    todoList.addEventListener('click',(e)=>{
      if(e.target.classList.contains('delete-btn')){
        const li = e.target.parentElement
        const id = Number(li.dataset.id)

        tasks = tasks.filter(task => task.id != id)
         saveTask()
         li.remove()
      }
    })
  
    function saveTask() {
      localStorage.setItem("task", JSON.stringify(tasks));
    }
})