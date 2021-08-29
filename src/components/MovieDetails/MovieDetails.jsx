import MovieDetailItem from "../MovieDetailItem/MovieDetailItem";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function MovieDetails() {
    const movies = useSelector(store => store.movies);

    return (
        <>
        <h1>{movies.title}</h1>
        <Link to='/'><button>Return to movie list</button></Link>
        {movies.map(movie =>{
            if (movie.id === 1) {
                return <MovieDetailItem
                            movie={movie} 
                        />
            }
        })}
        </>
    )
}

export default MovieDetails;