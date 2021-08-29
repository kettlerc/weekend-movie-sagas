const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const sqlQuery =`
    SELECT * FROM genres
    ORDER BY "id" DESC
  `
  pool.query(sqlQuery)
    .then((result) => {
      console.log('GETting genres');   
      res.send(result.rows);
    }).catch((err) => {
      console.log('GET genres error', err);
      res.sendStatus(500)
    })
});

module.exports = router;