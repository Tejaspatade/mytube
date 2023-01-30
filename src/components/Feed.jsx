import { Stack, Box, Typography } from "@mui/material";
import React from "react";

import { fetchFromAPI } from "../utils/fetchFromAPI.js";
import { useState, useEffect } from "react";
import { SideBar, Videos } from "./";

const Feed = () => {
    // Hooks
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then(
            (data) => {
                setVideos(data.items);
            }
        );
    }, [selectedCategory]);

    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box
                sx={{
                    height: { sx: "auto", md: "92vh" },
                    borderRight: "1px solid #3d3d3d",
                    px: { sx: 0, md: 2 },
                }}
            >
                <SideBar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                ></SideBar>
                <Typography
                    className="copyright"
                    variant="body2"
                    sx={{ mt: 1.5, color: "#fff" }}
                >
                    Made By Tejas Patade
                </Typography>
            </Box>

            <Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    marginLeft={2}
                    sx={{ color: "white" }}
                >
                    {selectedCategory}{" "}
                    <span style={{ color: "#FC1503" }}>Videos</span>
                </Typography>

                <Videos videos={videos} />
            </Box>
        </Stack>
    );
};

export default Feed;
