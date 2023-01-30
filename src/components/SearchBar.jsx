import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
    const [searchWord, setSearchWord] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchWord) {
            navigate(`/search/${searchWord}`);
            setSearchWord("");
        }
    };

    return (
        <Paper
            component="form"
            onSubmit={handleSubmit}
            sx={{
                borderRadius: 20,
                border: "1px solid #e3e3e3",
                pl: 2,
                boxShadow: "none",
            }}
        >
            <input
                className="search-bar"
                placeholder="Search..."
                value={searchWord}
                onChange={(e) => {
                    setSearchWord(e.target.value);
                }}
            ></input>
            <IconButton>
                <Search></Search>
            </IconButton>
        </Paper>
    );
};

export default SearchBar;
