import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

function MovieItem({movie}) {
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    const onMovieClick = () => {
        console.log('clicked on a movie', movies);
        const id = movie.id;
        history.push(`/details/${id}`)
    }

    return (
        <>
            <div>
                <Typography variant="overline">{movie.title}</Typography>
            </div>
            <div>
                <img onClick={onMovieClick} src={movie.poster} alt={movie.title}/>
            </div>
        </>
    )
}

export default MovieItem;