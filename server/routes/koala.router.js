const express = require('express');
const koalaRouter = express.Router();
const pg = require('pg');

// DB CONNECTION
let pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'koala_holla'
})

pool.on('connect', () => {
    console.log('Database connected')
});

// GET


// POST


// PUT


// DELETE

module.exports = koalaRouter;