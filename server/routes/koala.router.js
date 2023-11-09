const express = require('express');
const koalaRouter = express.Router();
const pg = require('pg');

// DB CONNECTION
let pool = new pg.Pool({
    host: 'localhost',
    port: 5432,
    database: 'koala_holla'
})

pool
.on('connect', () => {
    console.log('Database connected')
});

// GET
koalaRouter.get('/', (req, res) => {
    let queryText = `
    SELECT * FROM "koalas"
        ORDER BY "id"
    `
    pool
    .query(queryText).then(result => {
        res.send(result.rows);
    })
    .catch(error => {
        console.log('error getting koalas', error);
        res.sendStatus(500);
    })
})

// POST
koalaRouter.post('/', (req, res) => {
    let newKoala = req.body;
    console.log('New koala: ', newKoala);

    let queryText = `
    INSERT INTO "koalas" ("name", "gender", "age", "ready_to_transfer", "notes")
    VALUES
    ($1, $2, $3, $4, $5);
    `
    pool.query(queryText, [newKoala.name, newKoala.gender, newKoala.age, newKoala.ready_to_transfer, newKoala.notes])
    .then(result => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.log('Error adding new koala', error);
        res.sendStatus(500);
    })
})

// PUT
koalaRouter.put('/:id', (req, res) => {
    let idOfKoala = req.params.id;
    const sqlText = `
    UPDATE "koalas"
        SET "ready_to_transfer" = NOT "ready_to_transfer"
        WHERE "id" = $1;
    `
    const sqlValues = [idOfKoala]

    pool
    .query(sqlText, sqlValues)
    .then((dbResult) => {
        res.sendStatus(200)
    })
    .catch((dbError) => {
        console.log('PUT /koalas/:id failed: ', dbError);
        res.sendStatus(500);
    })
})

// DELETE
koalaRouter.delete('/:id', (req, res) => {
    let idOfKoala = req.params.id;
    const sqlText = `
    DELETE from "koalas"
        WHERE "id" = $1;
        `
    const sqlValues = [idOfKoala];

    pool
        .query(sqlText, sqlValues)
        .then((dbResult) => {
            res.sendStatus(200)
        })
        .catch((dbError) => {
            console.log('DELETE /koalas/:id failed', dbError);
            res.sendStatus(500)
        })
})


module.exports = koalaRouter;