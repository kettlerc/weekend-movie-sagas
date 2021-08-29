import { useDispatch, useSelector } from 'react-redux';


function MovieDetailItem({movie}) {
    const movies = useSelector(store => store.movies);

    return (
        <>
        <img src={movie.poster}></img>
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
        </>
    )
}

export default MovieDetailItem;