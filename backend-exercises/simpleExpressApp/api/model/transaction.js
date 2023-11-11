const mongoose =require('mongoose')
const {Schema} = mongoose

const transactionSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number},
    desc: {type: String, required: true},
    dateTime: {type: Date, required: true}

})

 const TransactionsModel = mongoose.model( 'transactions', transactionSchema  )

 module.exports = TransactionsModel