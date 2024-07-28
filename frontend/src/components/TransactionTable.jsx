import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getTransactions } from '../api';

const TableContainer = styled.div`
  width: 80%;
  margin: 20px auto;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Th = styled.th`
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  padding: 12px;
  color: #333;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center;
  color: #333;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:nth-child(odd) {
    background-color: #fff;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f4f4f4;
  cursor: pointer;
  &:disabled {
    background-color: #e4e4e4;
    cursor: not-allowed;
  }
`;

const TransactionsTable = ({ month }) => {
    const [transactions, setTransactions] = useState([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchTransactions = async () => {
        const perPage = 10;
        const response = await getTransactions(month, search, page, perPage);
        setTransactions(response.data);
        setTotalPages(Math.ceil(response.data.length / perPage)); // This logic should ideally come from the API response
    };

    useEffect(() => {
        fetchTransactions();
    }, [month, search, page]);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setPage(1); // Reset to page 1 on new search
    };

    return (
        <TableContainer>
            <SearchInput
                type="text"
                placeholder="Search transactions..."
                value={search}
                onChange={handleSearchChange}
            />
            <Table>
                <thead>
                    <tr>
                        <Th>Title</Th>
                        <Th>Description</Th>
                        <Th>Price</Th>
                        <Th>Date of Sale</Th>
                        <Th>Sold</Th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((t, index) => (
                        <Tr key={index}>
                            <Td>{t.title}</Td>
                            <Td>{t.description}</Td>
                            <Td>{t.price}</Td>
                            <Td>{new Date(t.dateOfSale).toLocaleDateString()}</Td>
                            <Td>{t.isSold ? 'Yes' : 'No'}</Td>
                        </Tr>
                    ))}
                </tbody>
            </Table>
            <Pagination>
                <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
                    Previous
                </Button>
                <Button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
                    Next
                </Button>
            </Pagination>
        </TableContainer>
    );
};

export default TransactionsTable;