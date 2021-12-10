import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function MoveDetails() {

    const dispatch = useDispatch();
    const singlemovie = useSelector(store => store.singlemovie);

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);
    return (
        <main>
            <h1>MovieDetails</h1>
            <h2>{singlemovie.title}</h2>
            <div key={singlemovie.id} >
                <h3>{singlemovie.title}</h3>
                <img src={singlemovie.poster} alt={singlemovie.title} />
            </div>

        </main >

    );
}

export default MoveDetails;