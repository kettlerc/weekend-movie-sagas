import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


function AddMovieForm() {
    const [genre, setGenre] = useState('');
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');

    return(
        <>
        <h1>Here's the movie form</h1>
        <FormControl>
            <TextField
                label="Movie Title" 
                variant="outlined" 
            />
            <TextField
                label="Poster URL" 
                variant="outlined" 
            />
            <TextField
                label="Movie Description" 
                variant="outlined"
                multiline
                rows={4} 
            />
            <FormControl variant="outlined">
                <Select
                    value={genre}
                >
                    <MenuItem value={'Adventure'}>Adventure</MenuItem>
                    <MenuItem value={'Animated'}>Animated</MenuItem>
                    <MenuItem value={'Biographical'}>Biographical</MenuItem>
                </Select>
            </FormControl>
            <ButtonGroup>
                <Button>Cancel</Button>
                <Button>Add Movie</Button>
            </ButtonGroup>
        </FormControl>
        </>
    )
}

export default AddMovieForm;