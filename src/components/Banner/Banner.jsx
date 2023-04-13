import React from "react";
import "./Banner.css";

const imageURL = import.meta.env.VITE_IMAGE_URL;
const imageSize = "w500";

const Banner = ({ featuredMovie }) => {
    return (
        featuredMovie && (
            <div className="banner">
                <img
                    src={`${imageURL}/${imageSize}/${featuredMovie.poster_path}`}
                    alt=""
                />
                <div className="movie-title">{featuredMovie.title}</div>
                <div className="movie-description">
                    {featuredMovie.overview}
                </div>
            </div>
        )
    );
};

export default Banner;
