import { useDispatch, useSelector } from 'react-redux';


function MovieDetails() {
    const movies = useSelector(store => store.movies);

    return (
        <h1>Here are some movie details!!!</h1>
    )
}

export default MovieDetails;