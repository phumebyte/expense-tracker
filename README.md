# 💰 Expense Tracker

A simple and intuitive Expense Tracker that allows users to manage their finances easily by tracking incomes and expenses. The application displays a user summary with total income, total expenses, and balance. Users can add transactions with a custom description, choose a transaction type (income or expense), and input the amount. All transactions are dynamically listed and can be deleted with a click.

## ✨ Features

- **User Summary**  
  Displays the total balance, total income, and total expenses.

- **Add Transactions**  
  Add a new transaction by entering a description, selecting the transaction type (income/expense), and specifying the amount.

- **Transaction List**  
  Each new transaction is appended to the list dynamically, showing the description and amount with color-coded styling (green for income, red for expense).

- **Delete Transactions**  
  Remove transactions by clicking the delete button next to each list item. Balance, income, and expenses are automatically recalculated.

- **Form Validation**  
  - Ensures all fields are filled.
  - Validates description (at least 2 characters, non-numeric).
  - Validates amount (positive number).

- **Unit Testing**  
  Comprehensive unit tests for all core functions (`addToTransactionList`, `userBalance`, `deleteTransaction`) using **Jest**.

---

## 🛠 Tech Stack

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Jest (for unit testing)**

---

## 🚀 How It Works

1. **Add a Transaction**  
   Fill in the description, select the type (income or expense), and input the amount. Submit the form to add the transaction.

2. **View Summary**  
   See your updated balance, total income, and total expenses immediately after each transaction.

3. **Delete a Transaction**  
   Click the trash icon next to a transaction to remove it. The financial summary will update automatically.

---

## 🧪 Running the Tests

Tests are written using **Jest**.

### Install Jest

```bash
npm install --save-dev jest
```
To run tests: 
```bash
npm test
```
#### The tests cover:

- Initialisation of transactionList
- Adding a transaction with validations
- Calculating user balance
- Deleting a transaction

## 📌 Future Improvements
- Persistent storage (e.g., Local Storage or a backend database).
- Filter transactions by type.
- Edit transactions.
- Responsive UI improvements.
- Dark mode toggle.

