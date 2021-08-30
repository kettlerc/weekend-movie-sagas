import MovieDetailItem from "../MovieDetailItem/MovieDetailItem";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';

function MovieDetails() {
    const movies = useSelector(store => store.movies);

    return (
        <>
        <Button><Link to='/'>Return to movie list</Link></Button>
        <div>
        {movies.map(movie =>{
            if (movie.id === 2) {
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