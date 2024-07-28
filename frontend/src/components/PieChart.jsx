// src/components/PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const ChartContainer = styled.div`
  width: 50%;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const PieChart = ({ data }) => {
    const chartData = {
        labels: Object.keys(data),
        datasets: [
            {
                label: '# of Items',
                data: Object.values(data),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)'
                ]
            }
        ]
    };

    return (
        <ChartContainer>
            <h2>Category Distribution</h2>
            <Pie data={chartData} />
        </ChartContainer>
    );
};

export default PieChart;
