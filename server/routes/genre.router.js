const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {

  console.log('req', req.params);

  const query = ` SELECT genres.name  
	FROM movies_genres 
  JOIN genres ON genres.id = movies_genres.genre_id
  JOIN movies on movies.id = movies_genres.movie_id
  WHERE movies_genres.movie_id = ${req.params.id}
  ORDER BY movies.title DESC;`;
  pool.query(query)
    .then(result => {
      console.log(result.rows);
      res.send(result.rows);

    })
    .catch(err => {
      console.log('ERROR: Get all genres', err);
      res.sendStatus(500)
    })
  // Add query to get all genres
});

module.exports = router;