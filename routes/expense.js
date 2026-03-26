const router = require("express").Router();
const expensesController =require("../controller/expense");

console.log("testinggg...");

router.post('/expenses', expensesController.expensesCreate);
router.get('/expenses', expensesController.expensesGet);
router.delete('/expenses/:id', expensesController.expensesDelete);



module.exports = router;