import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { Grid } from '@material-ui/core';
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <>
            <h1>MovieList</h1>
            <Grid container spacing={4}>
                {movies.map(movie => {
                return (
                    <Grid item md={3} key={movie.id}>
                        <MovieItem 
                            movie={movie}
                        />
                    </Grid>
                );
                })}
            </Grid>
        </>
    )
}

export default MovieList;