let express = require('express');
require('dotenv').config();

let app = express();
let bookController = require('./controllers/bookController');
let sequelize = require('./db');
let bodyParser = require('body-parser');

sequelize.sync();
app.use(bodyParser.json())

app.use('/admin',bookController);

app.get('/',(req,res)=>{
    res.send('online');
})
app.listen(3000);