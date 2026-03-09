// Example 1
const text = document.getElementById("myPeragraph");
const button = document.getElementById("changeTextButton");

button.addEventListener('click',()=>{
    text.textContent = 'Text change'
})
// Example 2
const citiList = document.getElementById("citiList");
const highlightButton = document.getElementById("highlightFirstCity");

highlightButton.addEventListener('click',()=>{
    citiList.firstElementChild.classList.toggle("highlight");
})
// Example 3
const order = document.getElementById("coffeOrder");
const type = document.getElementById("coffeType");
const changeOrder = document.getElementById("changeOrder");
let changed = false

changeOrder.addEventListener('click',()=>{
    if (changed) {
       type.textContent = "Latte"; 
    }else{
        type.textContent = "espresso";
    }
    changed = !changed;
})
// Example 4
const addNewIteam = document.getElementById("addNewIteam");
const shoppingList = document.getElementById("shoppingList");


addNewIteam.addEventListener('click',()=>{
    let newItem = document.createElement("li");
   newItem.textContent = 'eggs'
   shoppingList.appendChild(newItem)
})
// Example 5
const taskList = document.getElementById("taskList");
const removeList = document.getElementById("removeList");

removeList.addEventListener("click", () => {
    taskList.lastElementChild.remove()
});