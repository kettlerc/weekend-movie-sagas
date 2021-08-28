import MovieDetailItem from "../MovieDetailItem/MovieDetailItem";
import { Link } from 'react-router-dom';

function MovieDetails() {



    return (
        <>
        <h1>Here are some movie details!!!</h1>
        <Link to='/'><button>Return to movie list</button></Link>
        <MovieDetailItem />
        </>
    )
}

export default MovieDetails;