const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');

router.get('/statistics', async (req, res) => {
    const { month } = req.query;
    const monthNumber = new Date(Date.parse(month + " 1, 2021")).getMonth() + 1;
    const transactions = await Transaction.find({ $expr: { $eq: [{ $month: "$dateOfSale" }, monthNumber] } });
    const totalSales = transactions.reduce((acc, t) => acc + t.price, 0);
    const soldItems = transactions.filter(t => t.isSold).length;
    const unsoldItems = transactions.filter(t => !t.isSold).length;
    res.json({ totalSales, soldItems, unsoldItems });
});

module.exports = router;