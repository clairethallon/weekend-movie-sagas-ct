import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MoveDetails() {

    const dispatch = useDispatch();
    const genres = useSelector(store => store.genres);
    const singlemovie = useSelector(store => store.singlemovie);


    return (
        <main>
            <h1>MovieDetails</h1>
            {genres.map(genre => {
                return (
                    <div>
                        <h5>{genre.name}</h5>
                    </div>
                )
            })}
            {singlemovie.map(singlemovie => {
                return (
                    <div key={singlemovie.id} >
                        <h3>{singlemovie.title}</h3>
                        <img src={singlemovie.poster} alt={singlemovie.title} />
                    </div>
                );
            })}

        </main >

    );
}

export default MoveDetails;