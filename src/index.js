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
    yield takeEvery('FETCH_DETAILS', fetchDetails);
    yield takeEvery('ADD_MOVIE', addMovie);
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

function* fetchAllGenres() {
    try {
        const genres = yield axios.get('/api/genre');
        console.log('get all:', genres.data);
        yield put({
            type: 'SET_GENRES',
            payload: genres.data
        });
    } catch {
        console.log('get all genres error');
    }
}

function* fetchDetails(id) {
    try{
        const details = yield axios.get(`/api/movie/${id}`);
        console.log('id is', id);
        yield put({
            type: 'SET_DETAILS',
            payload: details.data
        })
    } catch {
        console.log('get details error');   
    }
}

function* addMovie(action) {
    try{
        yield axios.post('/api/movie', action.payload);
        console.log('payload is', action.payload);
        yield put({
            type: 'FETCH_MOVIES'
        })
    } catch (err) {
        console.log('POST movie failed');
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        case 'SET_DETAILS':
            return action.payload.id
        case 'ADD_MOVIE':
            return [ ...state, action.payload ]
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

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
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
