const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  const sqlQuery =`
    SELECT * FROM "genres"
    JOIN "movies_genres" ON "genres"."id" = "movies_genres"."genre_id"
    JOIN "movies" ON "movies"."id" = "movies_genres"."movie_id"
    WHERE "movies"."id" = 1;
    `;
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