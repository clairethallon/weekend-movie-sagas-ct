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
            <div class="MovieListNav">
                <h1>Movie List</h1>
                <Link to="/addMovie" style={{ textDecoration: "none" }}>
                    <Button variant="outlined" size="medium" style={{ marginBottom: 15 }}>Add Movie</Button>
                </Link>
            </div>
            <section className="movies">
                {movies.map(movie => {

                    return (

                        <div key={movie.id} class="carddiv" >
                            <Link to="/details" style={{
                                textDecoration: "none", backgroundColor: "#bebebe", '&:hover': {
                                    border: '1px', borderColor: 'primary.main'
                                }
                            }} onClick={() => dispatch({ type: 'FETCH_GENRES', payload: movie })}>
                                <h3 class='movietitle'>{movie.title}</h3>
                                <Card sx={{
                                    Width: "auto", height: 300, backgroundColor: "transparent", borderRadius: 5, boxShadow: 0
                                }} >


                                    <CardContent>

                                        <CardMedia
                                            component="img"
                                            // width="140"
                                            // height="auto"
                                            image={movie.poster}
                                            alt={movie.title}
                                            sx={{
                                                width: 175,
                                                margin: 'auto',

                                            }}
                                        />

                                    </CardContent>

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
