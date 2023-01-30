import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
    method: "GET",
    params: {
        maxResults: "50",
    },
    headers: {
        "X-RapidAPI-Key": "999b1dcb50msh4d08db50935f82ep19929djsn07793b2797e0",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
};

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};
