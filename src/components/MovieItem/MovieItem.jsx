import { useSelector } from 'react-redux';

function MovieItem() {
    const movies = useSelector(store => store.movies);

    return (
        <>
            <h3>{movies.title}</h3>
            <img src={movies.poster} alt={movies.title}/>
        </>
    )
}

export default MovieItem;