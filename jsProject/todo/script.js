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
      saveTask();
      todoInput.value = "";
      console.log(tasks);
    });

    function renderTask(task) {
      console.log(task);
    }

    function saveTask() {
      localStorage.setItem("task", JSON.stringify(tasks));
    }
})