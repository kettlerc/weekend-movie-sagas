import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

function MovieList() {
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <>
            <h1>MovieList</h1>
            <Grid container justifyContent="center" spacing={4}>
                {movies.map(movie => {
                return (
                    <Grid item md={3} key={movie.id}>
                        <div>
                            <Typography variant="overline">{movie.title}</Typography>
                        </div>
                        <div>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    </Grid>
                );
                })}
            </Grid>
        </>
    )
}

export default MovieList;