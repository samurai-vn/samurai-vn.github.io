const express = require('express');
const cors = require('cors');
const studentRouter = require('./router/studentRouter');

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());

app.use('/students', studentRouter);
app.use((err, req, res, next) => {
    res.status(500).json({message: "Something wrong" + err.message});
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})