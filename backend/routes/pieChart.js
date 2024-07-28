const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');

router.get('/pie-chart', async (req, res) => {
    const { month } = req.query;
    const monthNumber = new Date(Date.parse(month + " 1, 2021")).getMonth() + 1;
    const transactions = await Transaction.find({ $expr: { $eq: [{ $month: "$dateOfSale" }, monthNumber] } });

    const categoryCounts = transactions.reduce((acc, t) => {
        acc[t.category] = acc[t.category] ? acc[t.category] + 1 : 1;
        return acc;
    }, {});

    res.json(categoryCounts);
});

module.exports = router;