import React from "react";

import "./Navbar.css";

const Navbar = ({ searchText, setSearchText, fetchMovies }) => {
    const handleClick = e => {
        e.preventDefault();
        fetchMovies(searchText);
    };

    const handleEnterPress = e => {
        e.preventDefault();
        if (e.key === "Enter") {
            fetchMovies(searchText);
        }
    };

    return (
        <div className="navbar">
            <div className="navbar-item search-input">
                <input
                    type="text"
                    name=""
                    id=""
                    value={searchText}
                    placeholder="Search movies"
                    onChange={e => setSearchText(e.target.value)}
                    onKeyUp={e => handleEnterPress(e)}
                />
                <button type="submit" onClick={e => handleClick(e)}>
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Navbar;
