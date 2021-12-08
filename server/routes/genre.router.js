const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {

  const query = `SELECT movies.title, genres.name FROM movies_genres
  JOIN genres ON genres.id = movies_genres.genre_id
  JOIN movies on movies.id = movies_genres.movie_id
  GROUP BY movies.title, genres.name ORDER BY movies.title DESC;`;
  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })
  // Add query to get all genres
});

module.exports = router;