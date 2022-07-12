const express= require('express');
const mongoose=require('mongoose')
const dotenv= require('dotenv');
const morgan= require('morgan');
const bodyParser = require('body-parser');
const path= require('path');

const app= express();

dotenv.config({path:'config.env'});
const PORT=process.env.PORT||8000

require('./server/database/connection');


//log requests
app.use(morgan('tiny'));



//parse request to body-parser
app.use(bodyParser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

//load routers
app.use('/',require('./server/routes/router'))

//creating server

app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`)
  });