import React from 'react';
import styled from 'styled-components';

const StatisticsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px auto;
  width: 80%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const StatBox = styled.div`
  text-align: center;
  padding: 10px;
`;

const StatTitle = styled.h3`
  color: #333;
`;

const StatValue = styled.p`
  font-size: 18px;
  color: #555;
`;

const Statistics = ({ statistics }) => (
    <StatisticsContainer>
        <StatBox>
            <StatTitle>Total Sales</StatTitle>
            <StatValue>${statistics.totalSales}</StatValue>
        </StatBox>
        <StatBox>
            <StatTitle>Sold Items</StatTitle>
            <StatValue>{statistics.soldItems}</StatValue>
        </StatBox>
        <StatBox>
            <StatTitle>Unsold Items</StatTitle>
            <StatValue>{statistics.unsoldItems}</StatValue>
        </StatBox>
    </StatisticsContainer>
);

export default Statistics;