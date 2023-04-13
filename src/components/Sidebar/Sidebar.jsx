import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY_V3;

const Sidebar = () => {
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        fetchGenres();
    }, []);

    const fetchGenres = async () => {
        const response = await axios.get(
            `${baseURL}/genre/movie/list?api_key=${API_KEY}`
        );
        setGenres(response.data.genres);
        console.log(genres);
    };

    return (
        <div>
            {genres?.length ? (
                <div className="genres">
                    {genres.map(genre => (
                        <div className="genre" key={genre.id}>
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
