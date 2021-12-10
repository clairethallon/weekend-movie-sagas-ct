import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom"


function MoveDetails() {

    const genres = useSelector(store => store.genres);
    const singlemovie = useSelector(store => store.singlemovie);


    return (
        <main>
            <Link to="/" >
                <button>Back to List</button>
            </Link>

            {singlemovie.map(singlemovie => {
                return (
                    <div key={singlemovie.id} >
                        <h2>{singlemovie.title}</h2>
                        <img src={singlemovie.poster} alt={singlemovie.title} />

                        <p>{singlemovie.description}</p>
                    </div>
                );
            })}
            <h3>Genres</h3>
            {genres.map(genre => {
                return (
                    <div>
                        <h5>{genre.name}</h5>
                    </div>
                )
            })}

        </main >

    );
}

export default MoveDetails;