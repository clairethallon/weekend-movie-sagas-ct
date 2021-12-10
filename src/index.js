import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchAllGenres);

    // yield takeEvery('FETCH_MOVIE_DETAILS', fetchMovieDetails);

}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }

}
function* fetchAllGenres(movie) {
    // get all movies from the DB
    console.log('+++++++', movie.payload.id);


    try {
        console.log(movie.id);

        // let objectToSend = {
        //     id: movie.id
        // }.axios({
        //     method: 'GET',
        //     url: '/api/genre',
        //     data: objectToSend
        // })

        const response = yield axios.get(`/api/genre/${movie.payload.id}`);

        // const genres = yield axios.get('/api/genre/?id=' + singlemovie.id);
        console.log('get all genres:', response.data);
        // yield put({ type: 'SET_GENRES', payload: response.data });
        // call single movie reducer and set single movie

    } catch {
        console.log('get all error');
    }

}
// function* fetchMovieDetails(action) {
//     console.log('in fetchMovieDetails', action.payload);
//     put({ type: `SET_SINGLE_MOVIE`, payload: action.payload })

// }
// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}
const singlemovie = (state = [], action) => {
    switch (action.type) {
        case 'SET_SINGLE_MOVIE':
            state = action.payload;
            console.log('========', state);
            fetchAllGenres();
            return state;
        default:
            return state;
    }

}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        singlemovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
