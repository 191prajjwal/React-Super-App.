import axios from 'axios'

const BASE_URL= "https://api.themoviedb.org/3/discover/movie"

const API_KEY = import.meta.env.VITE_MOVIES_API_KEY


async function fetchMoviesByGenre(genereID){
    try{

        const {data}= await axios.get(BASE_URL,{
            params:{
                api_key:API_KEY,
                with_genres:genereID,
                language:"en-US",
                page:1,
                sort_by:"popularity.desc"

            }
        })

        return data

    }
    catch(error){
        console.log(error)

    }
}

export default fetchMoviesByGenre
