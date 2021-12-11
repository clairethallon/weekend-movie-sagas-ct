import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { Link } from "react-router-dom"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);



    return (
        <main>
            <Link to="/addMovie" style={{ textDecoration: "none" }}>
                <Button variant="outlined">Add Movie</Button>
            </Link>
            <h1>MovieList</h1>

            <section className="movies">
                {movies.map(movie => {

                    return (

                        <div key={movie.id} class="carddiv">
                            <Link to="/details" style={{ textDecoration: "none" }} onClick={() => dispatch({ type: 'FETCH_GENRES', payload: movie })}>
                                <h3 class='movietitle'>{movie.title}</h3>
                                <Card sx={{ Width: "auto", height: 300, backgroundColor: "black" }} >


                                    <CardContent>

                                        <CardMedia
                                            component="img"
                                            // width="140"
                                            // height="auto"
                                            image={movie.poster}
                                            alt={movie.title}
                                        />
                                        {/* <Typography variant="body2" color="text.secondary">
                                        {movie.description}
                                    </Typography> */}
                                    </CardContent>
                                    {/* <h3>{movie.title}</h3> */}
                                    {/* <img src={movie.poster} alt={movie.title} /> */}

                                </Card>
                            </Link>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;
