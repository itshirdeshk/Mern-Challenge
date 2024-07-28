const express = require('express');
const router = express.Router();
const Transaction = require('../models/transaction');

const getMonthNumber = (monthName) => {
    const month = new Date(Date.parse(monthName + " 1, 2021")).getMonth();
    return isNaN(month) ? null : month + 1;
};

router.get('/transactions', async (req, res) => {
    const { page = 1, perPage = 10, search = '', month } = req.query;
    const regex = new RegExp(search, 'i');
    
    const monthNumber = getMonthNumber(month);

    if (!monthNumber) {
        return res.status(400).json({ error: 'Invalid month' });
    }

    const query = {
        $expr: { $eq: [{ $month: "$dateOfSale" }, monthNumber] },
        $or: [
            { title: regex },
            { description: regex }
        ]
    };

    if (!isNaN(search)) {
        query.$or.push({ price: Number(search) });
    }

    try {
        const transactions = await Transaction.find(query)
            .skip((page - 1) * perPage)
            .limit(parseInt(perPage));
        
        res.json(transactions);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;