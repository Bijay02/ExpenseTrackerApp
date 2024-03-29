const { addExpense, getExpense, deleteExpense } = require("../controllers/expense");
const {addIncome, getIncomes, deleteIncomes} = require("../controllers/income");

const router = require('express').Router();

router.post('/add-income', addIncome)
    .get('/get-incomes', getIncomes)
    .delete("/delete-income/:id", deleteIncomes)
    .post('/add-expense', addExpense)
    .get('/get-expenses', getExpense)
    .delete('/delete-expense/:id' , deleteExpense )


router.get('/',(req,res)=>{
    res.send("Hello World")
})

module.exports = router;
