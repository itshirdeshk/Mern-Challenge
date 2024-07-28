const express = require('express');
const router = express.Router();
const axios = require('axios');
const Transaction = require('../models/transaction');

router.get('/init', async (req, res) => {
    try {
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const transactions = response.data;
        await Transaction.insertMany(transactions);
        res.send('Database initialized successfully');
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;