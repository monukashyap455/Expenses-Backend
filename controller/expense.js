const expenses = require("../model/expense");


exports.expensesCreate = async (req, res) => {
    try {

        const { title, amount, date } = req.body
        const expensesData = new expenses({
            title,
            amount,
            date
        })
        await expensesData.save();
        res.status(200).json({
            Message: "success",
            Result: expensesData

        })
    } catch (error) {
        res.send(error)

    }
}

exports.expensesGet = async (req, res) => {

    const expensesData = await expenses.find();
    console.log(expensesData);

    res.send(expensesData);


    
}
exports.expensesDelete= async(req,res)=>{
    const deleteExpense = req.params.id
    console.log(deleteExpense);
}



