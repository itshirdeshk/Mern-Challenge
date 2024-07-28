import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const getTransactions = (month, search, page, perPage) =>
    axios.get(`${API_URL}/transactions`, { params: { month, search, page, perPage } });

export const getStatistics = (month) =>
    axios.get(`${API_URL}/statistics`, { params: { month } });

export const getBarChart = (month) =>
    axios.get(`${API_URL}/bar-chart`, { params: { month } });

export const getPieChart = (month) =>
    axios.get(`${API_URL}/pie-chart`, { params: { month } });

export const getCombinedData = (month) =>
    axios.get(`${API_URL}/combined`, { params: { month } });;