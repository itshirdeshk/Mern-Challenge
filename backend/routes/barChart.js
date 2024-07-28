const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');

router.get('/bar-chart', async (req, res) => {
    const { month } = req.query;
    const monthNumber = new Date(Date.parse(month + " 1, 2021")).getMonth() + 1;
    const transactions = await Transaction.find({ $expr: { $eq: [{ $month: "$dateOfSale" }, monthNumber] } });

    const priceRanges = {
        '0-100': 0,
        '101-200': 0,
        '201-300': 0,
        '301-400': 0,
        '401-500': 0,
        '501-600': 0,
        '601-700': 0,
        '701-800': 0,
        '801-900': 0,
        '901-above': 0
    };

    transactions.forEach(t => {
        if (t.price <= 100) priceRanges['0-100']++;
        else if (t.price <= 200) priceRanges['101-200']++;
        else if (t.price <= 300) priceRanges['201-300']++;
        else if (t.price <= 400) priceRanges['301-400']++;
        else if (t.price <= 500) priceRanges['401-500']++;
        else if (t.price <= 600) priceRanges['501-600']++;
        else if (t.price <= 700) priceRanges['601-700']++;
        else if (t.price <= 800) priceRanges['701-800']++;
        else if (t.price <= 900) priceRanges['801-900']++;
        else priceRanges['901-above']++;
    });

    res.json(priceRanges);
});

module.exports = router;