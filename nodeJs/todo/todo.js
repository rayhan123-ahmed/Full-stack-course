const fs = require('fs');
const filePath = './tasks.json';


const loadTask = ()=>{
    try {
      // readFileSync returns a Buffer (raw binary data, often shown in hex)
      const dataBuffer = fs.readFileSync(filePath);
      // convert Buffer → string (readable JSON text)
      const dataJSON = dataBuffer.toString();
      // convert JSON string → real JavaScript array/object
      return JSON.parse(dataJSON);
    } catch (error) {
        return []
    }
}

const saveTask = (tasks) => {
  const dataJSON = JSON.stringify(tasks);
  fs.writeFileSync(filePath,dataJSON);
};

const addTask = (task) =>{
   const tasks = loadTask();
   tasks.push({task});
   saveTask(tasks)
   console.log('task added', task);
}

const listTask = ()=>{
  const tasks = loadTask();
  tasks.forEach((task,index)=> console.log(`${index +1} - ${task.task}`)
  )
}

// const command = process.argv[2]
// const argument = process.argv[3];

const [, , command, argument] = process.argv;

if (command === 'add') {
    addTask(argument)
} else if (command === 'list') {
    listTask()
}else if(command === 'remove'){
    removeTask(parseInt(argument));
}else{
    console.log("Command not found!");
}