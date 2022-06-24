const express = require("express");
const app = express();
app.use(express.json());
require("./database/mongodb");
const cors = require('cors');
app.use(cors());

const expense = require("./routes/expense");

app.use(expense)




const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Server is running on port ${port}`));