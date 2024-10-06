import axios from 'axios'

const BASE_URL= "https://api.weatherapi.com/v1"

const API_KEY= import.meta.env.VITE_WEATHER_API_KEY 

export async function fetchWeather(city="Bengaluru"){

   
    try {
        const {data}=await axios.get(`${BASE_URL}/current.json`,{
            params:{
                key:API_KEY,
                q:city
            }
        })
        console.log(data)
        return data
    } catch (error) {
        console.error(error)
    }

}