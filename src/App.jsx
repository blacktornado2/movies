import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { Navbar, Sidebar, Cards } from "./components";

const baseURL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY_V3;

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        if (searchText) {
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

    return (
        <div>
            <Navbar
                searchText={searchText}
                setSearchText={setSearchText}
                fetchMovies={fetchMovies}
            />

            <Sidebar fetchMovies={fetchMovies} />
            <Cards movies={movies} />
        </div>
    );
};

export default App;
