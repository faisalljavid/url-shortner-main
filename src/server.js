const express = require('express');
require('dotenv').config();
require('./db/connect');

const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env[`${NODE_ENV}_PORT`];

// const app = express();
// or
const server = express();

server.listen(PORT, () => {
    console.log(`${NODE_ENV} Server is started on PORT - ${PORT}`);
})
