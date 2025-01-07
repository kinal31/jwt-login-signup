const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { Model } = require('mongoose');
const bodyParser = require('body-parser');
require('./Models/db');
const AuthRouter = require('./Routes/AuthRouter')
const ProductRouter = require('./Routes/ProductRouter')

// Load environment variables
dotenv.config();


const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

app.get("/ping",(req,res) =>{
    res.send("Pong");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));