import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { Navbar, Sidebar, Cards, Banner } from "./components";

const baseURL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY_V3;

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [activeGenreId, setActiveGenreId] = useState(0);

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async searchTerm => {
        if (activeGenreId) {
            const { data } = await axios.get(
                `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=${activeGenreId}`
            );
            const movies = data.results;
            console.log(movies);
            setMovies(movies);
            return;
        }

        if (searchTerm) {
            const { data } = await axios.get(
                `${baseURL}/search/movie?api_key=${API_KEY}&query=${searchText}`
            );
            const movies = data.results;
            setMovies(movies);
            return;
        }
        const { data } = await axios.get(
            `${baseURL}/movie/popular?api_key=${API_KEY}`
        );
        const movies = data.results;
        setMovies(movies);
    };

    console.log(activeGenreId);

    return (
        <div>
            <Navbar
                searchText={searchText}
                setSearchText={setSearchText}
                fetchMovies={fetchMovies}
            />

            <Sidebar
                activeGenreId={activeGenreId}
                setActiveGenreId={setActiveGenreId}
                fetchMovies={fetchMovies}
            />
            <Banner featuredMovie={movies[0]} />
            <Cards movies={movies.slice(1)} />
        </div>
    );
};

export default App;
