import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  poster: {
    width: 200,
    height: 300
  },
  title: {
    height: 75,
    marginTop: 50
  }
});

function MovieItem({movie}) {
    const dispatch= useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();
    const classes = useStyles();

    const onMovieClick = () => {
        console.log('clicked on a movie', movie.id);
        const id = movie.id;
        history.push(`/details/${id}`);
        dispatch({
            type: 'FETCH_DETAILS',
            payload: movie.id
        });
    }

    return (
        <>
            <div className={classes.title}>
                <Typography variant="overline">{movie.title}</Typography>
            </div>
            <div>
                <img 
                    className={classes.poster}
                    onClick={onMovieClick} 
                    src={movie.poster} 
                    alt={movie.title}
                />
            </div>
        </>
    )
}

export default MovieItem;