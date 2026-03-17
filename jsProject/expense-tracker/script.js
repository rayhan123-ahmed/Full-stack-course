const expenseForm = document.getElementById("expense-form");
const expenseName = document.getElementById("expense-name");
const expenseAmount = document.getElementById("expense-amount");
const expenseList = document.getElementById("expense-list");
const displayAmountTotal = document.getElementById("total-amount");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let totalAmount = calculateTotal();

renderExpenses();
// Load total on start
updateTheTotal();

expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = expenseName.value.trim();
  const amount = parseFloat(expenseAmount.value.trim());

  if (name !== "" && !isNaN(amount) && amount > 0) {
    const newExpenses = {
      id: Date.now(),
      name,
      amount,
    };
    expenses.push(newExpenses);
    saveInLocalStorage();
    renderExpenses();
    updateTheTotal();
    expenseName.value = "";
    expenseAmount.value = "";
  }
});

function renderExpenses() {
  expenseList.innerHTML = "";
  expenses.forEach((expense) => {
    const li = document.createElement("li");
    li.classList.add("list");
    li.innerHTML = `
       ${expense.name} - $${expense.amount}
       <button class= 'delete-btn' data-id = "${expense.id}">Delete</button>
       `;
    expenseList.appendChild(li);
  });
}

function saveInLocalStorage() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

function calculateTotal() {
  return expenses.reduce((sum, expense) => sum + expense.amount, 0);
}

function updateTheTotal() {
  totalAmount = calculateTotal();
  displayAmountTotal.textContent = totalAmount.toFixed(2);
}

// for delete

expenseList.addEventListener("click", (e) => {
  if ((e.target.tagName = "BUTTON")) {
    const expensesId = parseInt(e.target.getAttribute("data-id"));
    expenses = expenses.filter((expense) => expense.id !== expensesId);

    saveInLocalStorage();
    renderExpenses();
    updateTheTotal();
  }
});
