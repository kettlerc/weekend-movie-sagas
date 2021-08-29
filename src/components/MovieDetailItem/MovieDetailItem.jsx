import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function MovieDetailItem({movie}) {
    const dispatch = useDispatch();
    const genres = useSelector(store => store.genres);

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES'})
    }, []);

    return (
        <>
        <img src={movie.poster}></img>
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        <ul>
            {genres.map(genre => {
                return <li key={genre.name}>{genre.name}</li>
            })}
        </ul>
        </>
    )
}

export default MovieDetailItem;