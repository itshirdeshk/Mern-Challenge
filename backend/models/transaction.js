const mongoose = require('mongoose');
const TransactionSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    dateOfSale: Date,
    isSold: Boolean,
    category: String
});
const Transaction = mongoose.models.Transaction || mongoose.model('Transaction', TransactionSchema);
module.exports = Transaction