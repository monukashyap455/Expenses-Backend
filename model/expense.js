const mongoose = require("mongoose");

let expensesSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },

});
module.exports = new mongoose.model("expense", expensesSchema);