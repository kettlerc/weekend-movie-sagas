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
    const [genre, setGenre] = useState('');
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');

    const addMovie = () => {
        console.log('add movie button working');
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
                    <MenuItem value={'Adventure'}>Adventure</MenuItem>
                    <MenuItem value={'Animated'}>Animated</MenuItem>
                    <MenuItem value={'Biographical'}>Biographical</MenuItem>
                    <MenuItem value={'Comedy'}>Comedy</MenuItem>
                    <MenuItem value={'Disaster'}>Disaster</MenuItem>
                    <MenuItem value={'Drama'}>Drama</MenuItem>
                    <MenuItem value={'Epic'}>Epic</MenuItem>
                    <MenuItem value={'Fantasy'}>Fantasy</MenuItem>
                    <MenuItem value={'Musical'}>Musical</MenuItem>
                    <MenuItem value={'Romantic'}>Romantic</MenuItem>
                    <MenuItem value={'Science Fiction'}>Science Fiction</MenuItem>
                    <MenuItem value={'Space-Opera'}>Space Opera</MenuItem>
                    <MenuItem value={'Superhero'}>Superhero</MenuItem>
                </Select>
            </FormControl>
            <ButtonGroup>
                <Button><Link to='/'>Cancel</Link></Button>
                <Button onClick={addMovie}>Add Movie</Button>
            </ButtonGroup>
        </FormControl>
        </>
    )
}

export default AddMovieForm;