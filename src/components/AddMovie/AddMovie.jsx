import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import './AddMovie.css'


function AddMovie() {
    const dispatch = useDispatch();


    const [addMovie, setaddMovie] = useState({ title: '', poster: '', description: '', genre_id: '' });
    const [selectedgenre, setGenre] = useState('');

    const listOfGenres = [
        {
            value: 1,
            label: 'Adventure'
        },
        {
            value: 2,
            label: 'Animated'
        },
        {
            value: 3,
            label: 'Biographical'
        },
        {
            value: 4,
            label: 'Comedy'
        },
        {
            value: 5,
            label: 'Disaster'
        },
        {
            value: 6,
            label: 'Drama'
        },
        {
            value: 7,
            label: 'Epic'
        },
        {
            value: 8,
            label: 'Fantasy'
        },
        {
            value: 9,
            label: 'Musical'
        },
        {
            value: 10,
            label: 'Romantic'
        },
        {
            value: 11,
            label: 'Science Fiction'
        },
        {
            value: 12,
            label: 'Space-Opera'
        },
        {
            value: 13,
            label: 'Superhero'
        }];

    const handleGenreChange = (event) => {
        console.log('in handleGenreChange', event.target.value);
        setGenre(event.target.value);
        setaddMovie({ ...addMovie, genre_id: event.target.value });

    };

    const handleTitleChange = (event) => {
        console.log('in handleTitleChange', event.target.value);

        setaddMovie({ ...addMovie, title: event.target.value });
    };
    const handlePosterChange = (event) => {
        console.log('in handlePosterChange', event.target.value);

        setaddMovie({ ...addMovie, poster: event.target.value });
    };

    const handleDescriptionChange = (event) => {
        console.log('in handleDescriptionChange', event.target.value);

        setaddMovie({ ...addMovie, description: event.target.value });
    };

    const addmovie = () => {
        console.log('in addmovie');
        dispatch({ type: 'ADD_MOVIE', payload: addMovie })
    }

    return (
        <main>

            <h2>Add Movie</h2>
            <div class="formDiv">
                <p class="formTitle">Title</p>
                <TextField
                    required
                    id="outlined-required"
                    margin="none"
                    onChange={handleTitleChange}
                    sx={{ backgroundColor: "white" }}

                />
                <br />
                <p class="formTitle">Poster Image URL</p>
                <TextField
                    required
                    id="outlined-required"
                    margin="none"
                    onChange={handlePosterChange}
                    sx={{ backgroundColor: "white" }}

                />
                <br />
                <p class="formTitle">Description</p>

                <TextField
                    required
                    id="Multiline"
                    multiline
                    rows={4}
                    margin="none"
                    onChange={handleDescriptionChange}
                    sx={{ backgroundColor: "white" }}

                />
                <br />

                <p class="formTitle">Genre</p>

                <TextField
                    id="outlined-select-currency-native"
                    select
                    margin="none"
                    value={selectedgenre}
                    onChange={handleGenreChange}
                    sx={{ backgroundColor: "white" }}
                    SelectProps={{
                        native: true,
                    }}
                >
                    {listOfGenres.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
                <br />
                <div class="formTitle">
                    <Link to="/" style={{ textDecoration: "none", paddingRight: 15 }} >
                        <Button variant="outlined" color="warning">Cancel</Button>
                    </Link>

                    <Button onClick={addmovie} variant="outlined">ADD MOVIE</Button>
                </div>
            </div>
        </main >

    );
}

export default AddMovie;