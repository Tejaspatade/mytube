import React from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { fetchFromAPI } from "../utils/fetchFromAPI.js";
import { Videos } from "./";

const SearchFeed = () => {
    // Hooks
    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
            setVideos(data.items);
        });
    }, [searchTerm]);

    return (
        <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
            <Typography
                variant="h4"
                fontWeight="bold"
                marginLeft={2}
                sx={{ color: "white" }}
            >
                Search Results For:
                <span style={{ color: "#FC1503" }}> {searchTerm} Videos</span>
            </Typography>

            <Videos videos={videos} />
        </Box>
    );
};

export default SearchFeed;
