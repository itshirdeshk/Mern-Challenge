const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/combined', async (req, res) => {
    const { month } = req.query;

    const [transactions, statistics, barChart, pieChart] = await Promise.all([
        axios.get(`http://localhost:3000/api/transactions?month=${month}`),
        axios.get(`http://localhost:3000/api/statistics?month=${month}`),
        axios.get(`http://localhost:3000/api/bar-chart?month=${month}`),
        axios.get(`http://localhost:3000/api/pie-chart?month=${month}`)
    ]);

    res.json({
        transactions: transactions.data,
        statistics: statistics.data,
        barChart: barChart.data,
        pieChart: pieChart.data
    });
});

module.exports = router;