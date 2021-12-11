import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import './MovieDetails.css'
import Button from '@mui/material/Button';



function MoveDetails() {

    const genres = useSelector(store => store.genres);
    const singlemovie = useSelector(store => store.singlemovie);


    return (
        <main class="detailsMain">
            <Link to="/" style={{ textDecoration: "none" }} >
                <Button variant="outlined">Back to List</Button>
            </Link>

            {singlemovie.map(singlemovie => {
                return (
                    <div key={singlemovie.id} >
                        <h1>{singlemovie.title}</h1>
                        <div class="detailsSub">
                            <img src={singlemovie.poster} alt={singlemovie.title} />
                            <div class="genresHeader">
                                <h3 class="genreh3" >Genres</h3>
                                {genres.map(genre => {
                                    return (
                                        <div>
                                            <h5 class="genreslist">{genre.name}</h5>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <h6 class="description">{singlemovie.description}</h6>

                    </div>
                );
            })}


        </main >

    );
}

export default MoveDetails;