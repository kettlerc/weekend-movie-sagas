import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


function AddMovieForm() {
    const dispatch = useDispatch();
    const [genre, setGenre] = useState('');
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');

    const addMovie = event => {
        event.preventDefault();
        console.log('add movie button working');
        dispatch({
            type: 'ADD_MOVIE',
            payload: {
                title,
                poster: url,
                description,
                genre_id: genre
            }
        })
    }

    return(
        <>
        <h2>Add a movie to your collection here:</h2>
        <FormControl>
            <TextField
                label="Movie Title" 
                variant="outlined"
                value={title}
                onChange={(event) => setTitle(event.target.value)} 
            />
            <TextField
                label="Poster URL" 
                variant="outlined"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
            />
            <TextField
                label="Movie Description" 
                variant="outlined"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                multiline
                rows={4} 
            />
            <FormControl variant="outlined">
                <Select
                    value={genre}
                    onChange={(event) => setGenre(event.target.value)}
                >
                    <MenuItem value={1}>Adventure</MenuItem>
                    <MenuItem value={2}>Animated</MenuItem>
                    <MenuItem value={3}>Biographical</MenuItem>
                    <MenuItem value={4}>Comedy</MenuItem>
                    <MenuItem value={5}>Disaster</MenuItem>
                    <MenuItem value={6}>Drama</MenuItem>
                    <MenuItem value={7}>Epic</MenuItem>
                    <MenuItem value={8}>Fantasy</MenuItem>
                    <MenuItem value={9}>Musical</MenuItem>
                    <MenuItem value={10}>Romantic</MenuItem>
                    <MenuItem value={11}>Science Fiction</MenuItem>
                    <MenuItem value={12}>Space Opera</MenuItem>
                    <MenuItem value={13}>Superhero</MenuItem>
                </Select>
            <ButtonGroup>
                <Button><Link to='/'>Cancel</Link></Button>
                <Button onClick={addMovie}>Add Movie</Button>
            </ButtonGroup>
            </FormControl>
        </FormControl>
        </>
    )
}

export default AddMovieForm;