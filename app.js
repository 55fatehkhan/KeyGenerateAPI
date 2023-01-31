const express = require('express')  
const app = express();


const KeyPair = require('./keypairs')

const bodyParser = require('body-parser')





//middleware ----

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());




app.use('/generateKeys', KeyPair)


app.use((req,res,next) =>{
   res.status(404).json({
      msg:'bad url request'
   })
})

module.exports = app;