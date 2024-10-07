import axios from 'axios';

// Base URL for TMDB API
const BASE_URL = "https://api.themoviedb.org/3/discover/movie";

// Fetch the API key from environment variables
const API_KEY = import.meta.env.VITE_MOVIES_API_KEY;

async function fetchMoviesByGenre(genreID) {
    try {
        // Ensure API key is available
        if (!API_KEY) {
            throw new Error("API key is missing. Please ensure the environment variable is set correctly.");
        }

        // Make the API request with appropriate headers
        const { data } = await axios.get(BASE_URL, {
            params: {
                api_key: API_KEY,
                with_genres: genreID,
                language: "en-US",
                page: 1,
                sort_by: "popularity.desc",
            },
            headers: {
                'Content-Type': 'application/json; charset=utf-8',  // Ensure proper content type
                'Accept': 'application/json',                        // Accept JSON response
            },
        });

        return data;

    } catch (error) {
        // Enhanced error handling to diagnose problems in Edge
        if (error.response) {
            // The server responded with a status other than 2xx
            console.error("Error Response:", error.response.data);
            console.error("Status Code:", error.response.status);
        } else if (error.request) {
            // Request was made but no response received
            console.error("Error Request:", error.request);
        } else {
            // General error
            console.error("Error Message:", error.message);
        }
    }
}

export default fetchMoviesByGenre;
