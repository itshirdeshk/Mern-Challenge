import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getCombinedData } from './api';
import TransactionsTable from './components/TransactionTable';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import "./App.css"

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Header = styled.h1`
  color: #333;
`;

const Select = styled.select`
  padding: 10px;
  margin: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const App = () => {
    const [month, setMonth] = useState('March');
    const [data, setData] = useState({
        transactions: [],
        statistics: { totalSales: 0, soldItems: 0, unsoldItems: 0 },
        barChart: {},
        pieChart: {}
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, [month]);

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await getCombinedData(month);
            setData(response.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <AppContainer>
            <Header>MERN Stack Coding Challenge</Header>
            <Select value={month} onChange={(e) => setMonth(e.target.value)}>
                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((m) => (
                    <option key={m} value={m}>{m}</option>
                ))}
            </Select>
            <TransactionsTable month={month} />
            <Statistics statistics={data.statistics} />
            <BarChart data={data.barChart} />
            <PieChart data={data.pieChart} />
        </AppContainer>
    );
};

export default App;