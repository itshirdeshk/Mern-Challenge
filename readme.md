# MERN Stack Coding Challenge

This project is a MERN (MongoDB, Express, React, Node.js) stack application designed to manage and display transaction records. The application supports features such as search, pagination, and monthly filtering of transactions.

## Table of Contents

- [Backend](#backend)
  - [Requirements](#requirements)
  - [Setup](#setup)
  - [Running the Server](#running-the-server)
  - [API Endpoints](#api-endpoints)
- [Frontend](#frontend)
  - [Requirements](#requirements-1)
  - [Setup](#setup-1)
  - [Running the Client](#running-the-client)

## Backend

### Requirements

- Node.js
- MongoDB

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Mern-Challenge.git
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root of the `backend` directory and add the following:

   ```env
   MONGODB_URI=mongodb://localhost:27017/mern-challenge
   PORT=3000
   ```

### Running the Server

Start the server with the following command:

```bash
npm start
```

### API Endpoints

#### 1. Init Endpoint:

- `GET /api/init`: A GET request that seed the database.

#### 2. Transactions Endpoint:

- `GET /api/transactions`: A GET request that accepts month as required parameter and search, page and pageNumber as optional paramater and returns the transaction data of that month.

#### 3. PieChart Endpoint:

- `GET /api/pie-chart`: A GET request that accepts month as required parameter.

#### 4. BarChart Endpoint:

- `GET /api/bar-chart`: A GET request that accepts month as required parameter.

#### 5. Statistics Endpoint:

- `GET /api/statistics`: A GET request that accepts month as required parameter.

#### 3. Combined Endpoint:

- `GET /api/combined`: A GET request that accepts month as required parameter and return all the data of all the endpoints.

## Frontend

### Requirements

- Node.js

1. **Go to the frontend folder:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```
### Running the Server

Start the server with the following command:

```bash
npm run dev
```
