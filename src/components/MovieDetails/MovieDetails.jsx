import MovieDetailItem from "../MovieDetailItem/MovieDetailItem";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function MovieDetails() {
    const movies = useSelector(store => store.movies);

    return (
        <>
        <Link to='/'><button>Return to movie list</button></Link>
        <div>
        {movies.map(movie =>{
            if (movie.id === 1) {
                return <MovieDetailItem
                            key={movie.id}
                            movie={movie} 
                        />
            }
        })}
        </div>
        </>
    )
}

export default MovieDetails;