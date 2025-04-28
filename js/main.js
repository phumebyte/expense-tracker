import {
  transactionList,
  addToTransactionList,
  userBalance,
  deleteTransaction,
} from "../js/tracker.js";

const form = document.getElementById("user-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const description = document.getElementById("transaction-title").value;
  const transactionType = document.querySelector(
    'input[name="transaction-type"]:checked'
  )?.value;
  const amount = document.getElementById("transaction-amount").value;
  const deleteBtn = document.getElementById("delete-btn");

  const accountBalance = document.getElementById("account-balance");
  const totalIncome = document.getElementById("total-income");
  const totalExpenses = document.getElementById("total-expenses");

  let balance = 0;
  let income = 0;
  let expenses = 0;

  // calling the add function every time the form submits
  addToTransactionList(description, transactionType, amount);

  // DOM UPDATES
  document.getElementById("list").innerHTML = "";
  for (let i = 0; i < transactionList.length; i++) {
    let color =
      transactionList[i].transactionType == "income"
        ? "color: #357C3C;"
        : "color: #CD113B;";

    document.getElementById("list").innerHTML += `
            <li class="transaction" id="transaction">

                <h4>${transactionList[i].title}</h4>

                <h4 style="${color}">R${transactionList[i].amount}</h4>
            
                <button class="delete-btn" id="delete-btn"> <i class="bi bi-trash-fill"></i></button>
        
            </li>`;

    document.getElementById("list").addEventListener("click", (event) => {
      if (
        event.target.classList.contains("delete-btn") ||
        event.target.closest(".delete-btn")
      ) {
        const listItem = event.target.closest(".transaction");
        const transactionTitle = listItem.querySelector("h4").textContent;

        deleteTransaction(transactionTitle);
        listItem.remove();

        let balance = 0;
        let income = 0;
        let expenses = 0;

        for (let i = 0; i < transactionList.length; i++) {
          if (transactionList[i].transactionType === "income") {
            income += transactionList[i].amount;
          } else {
            expenses += transactionList[i].amount;
          }
        }

        balance = income - expenses;

        // Update the DOM
        accountBalance.innerHTML = `
            Balance <br> <strong>R${balance}</strong>
        `;
        totalExpenses.innerHTML = `
            Expenses <br> <strong>R${expenses}</strong>
        `;
        totalIncome.innerHTML = `
            Income <br> <strong>R${income}</strong>
        `;

        console.log(transactionList);
      }
    });

    console.log(transactionList);

    balance = userBalance(
      transactionList[i].transactionType,
      transactionList[i].amount,
      balance
    );
    let isType =
      transactionList[i].transactionType == "income"
        ? (income += transactionList[i].amount)
        : (expenses += transactionList[i].amount);
  }

  accountBalance.innerHTML = `
        Balance <br> <strong>R${balance}</strong>
    `;
  totalExpenses.innerHTML = `
        Expenses <br> <strong>R${expenses}</strong>
    `;
  totalIncome.innerHTML = `
        Income <br> <strong>R${income}</strong>
    `;

  form.reset();
});
