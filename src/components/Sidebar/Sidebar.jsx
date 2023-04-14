import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY_V3;

const Sidebar = ({ activeGenreId, setActiveGenreId, fetchMovies }) => {
    const [allGenres, setAllGenres] = useState([]);
    useEffect(() => {
        fetchAllGenres();
    }, []);

    async function fetchAllGenres() {
        const response = await axios.get(
            `${baseURL}/genre/movie/list?api_key=${API_KEY}`
        );
        setAllGenres(response.data.genres);
    }

    function handleClick(genreId) {
        if (genreId === activeGenreId) {
            setActiveGenreId(0);
            return;
        }
        setActiveGenreId(genreId);
        fetchMovies();
    }

    return (
        <div>
            {allGenres?.length ? (
                <div className="genres">
                    {allGenres.map(genre => (
                        <div
                            className="genre"
                            key={genre.id}
                            onClick={() => handleClick(genre.id)}
                        >
                            {genre.name}
                        </div>
                    ))}
                </div>
            ) : (
                "LOADER"
            )}
        </div>
    );
};

export default Sidebar;
