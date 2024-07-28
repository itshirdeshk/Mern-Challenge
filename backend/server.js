const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const initRoutes = require('./routes/init');
const transactionRoutes = require('./routes/transaction');
const statisticsRoutes = require('./routes/statistics');
const barChartRoutes = require('./routes/barChart');
const pieChartRoutes = require('./routes/pieChart');
const combinedRoutes = require('./routes/combined');
const connection = require('./db');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

connection();

app.use('/api', initRoutes);
app.use('/api', transactionRoutes);
app.use('/api', statisticsRoutes);
app.use('/api', barChartRoutes);
app.use('/api', pieChartRoutes);
app.use('/api', combinedRoutes);

app.listen(PORT, () => console.log(`Server started on port ${3000}`));