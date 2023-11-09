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
koalaRouter.get('/', (req, res) => {
    let queryText = `
    SELECT * FROM "koalas"
    `
    pool.query(queryText).then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error getting koalas', error);
        res.sendStatus(500);
    })
})

// POST


// PUT


// DELETE

module.exports = koalaRouter;