import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const BarChart = ({ data }) => {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: '# of Items',
        data: Object.values(data),
        backgroundColor: 'rgba(75, 192, 192, 0.6)'
      }
    ]
  };

  return (
    <ChartContainer>
      <h2>Price Range Distribution</h2>
      <Bar data={chartData} />
    </ChartContainer>
  );
};

export default BarChart;
