import React from "react";
import "./Cards.css";

const imageURL = "https://image.tmdb.org/t/p";
const imageSize = "w300";

const Cards = ({ movies }) => {
    return (
        <div className="movies">
            {movies.map(movie => (
                <div className="movie" key={movie.id}>
                    <div className="movie-image">
                        <img
                            src={`${imageURL}/${imageSize}/${movie.poster_path}`}
                            alt=""
                        />
                    </div>
                    <div className="movie-content">
                        <div className="movie-title">
                            {movie.original_title}
                        </div>
                        <div className="movie-overview">{movie.overview}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cards;
