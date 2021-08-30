import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function MovieDetailItem({movie}) {
    const genres = useSelector(store => store.genres);

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