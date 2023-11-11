const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const transaction = require('./models/transaction.js')

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DATABASE_URL)

app.get('/api', (req, res) => {
    res.json('text21')
})


app.post('/api/transaction', async (req, res) => {
    const item = new transaction(req.body)
    try {
       const response =  await item.save() 
       res.json(response)
    }catch(err){
        console.error(err)
    }
})

app.get('/api/transactions', async(req, res) => {
    try {
       const response =  await transaction.find({})
       res.json(response)
    }catch(err){
        console.error(err)
    }
})



app.listen( 4000, () => console.log('server works'))

//ULvzR4r9kIUWuGf6