import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './MovieList.css'
import { Grid } from '@material-ui/core';
import MovieItem from '../MovieItem/MovieItem';
import Button from '@material-ui/core/Button';

function MovieList() {
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <>
            <Link to='/addmovie'><Button variant="outlined">Add Movie</Button></Link>      
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