import { useDispatch, useSelector } from 'react-redux';


function MovieDetailItem() {
    const movies = useSelector(store => store.movies);

    return (
        <>
        <h1>and some more details...</h1>
        </>
    )
}

export default MovieDetailItem;