require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 4001;

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection
db.on('error', (error)=> console.error(error))
db.once('open', ()=> console.log('Connected to database'))

app.use(express.json())

const usersRouter = require('./routes/route')
 app.use('/users', usersRouter)
 
 app.get('/api', (req,res)=>{
res.json('success')
 })


app.listen(port,() =>console.log(`server is running on port ${port}`) )