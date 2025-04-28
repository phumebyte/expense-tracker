let transactionList = []

function addToTransactionList(description, transactionType, amount ){
    if (!description || !transactionType || !amount) {
        alert("Please fill out all fields.")
        return;
    }

    if(description.length < 2 || !isNaN(description)){
        alert("Please enter valid description")
        return
    }

    if(amount < 0 || isNaN(amount)){
        alert("Please enter valid amount")
        return
    }

    let transaction = {
        title: description,
        transactionType: transactionType,
        amount: parseFloat(amount)
    }

    transactionList.push(transaction)
} 

function userBalance(transactionType, amount, balance){
    let amountFloat = parseFloat(amount)

    if (!transactionType || !amount) {
        alert("Please fill out all fields.")
        return
    }

    if(transactionType == "income"){
        balance += amountFloat
    } else if(transactionType == "expense"){
        balance -= amountFloat
    }
    // I want to be able to return the balance
    // For loop to traverse the array 
    // access each transaction and update balance
    return balance
}

function deleteTransaction(description){

    if(!description){
        alert("Please enter description")
        return
    }

    for (let i = 0; i < transactionList.length; i++) {
        if(transactionList[i].title == description){
            //console.log(transactionList)
            transactionList.splice(i,1)
        }
    }
}



export { transactionList , addToTransactionList , userBalance , deleteTransaction }