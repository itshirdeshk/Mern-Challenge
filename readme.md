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
   MONGO_URI=mongodb://localhost:27017/mern-challenge
   PORT=3000
   ```

### Running the Server

Start the server with the following command:

```bash
npm start
```

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
