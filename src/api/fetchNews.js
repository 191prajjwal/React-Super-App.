import axios from 'axios'

const BASE_URL= "https://newsapi.org/v2/top-headlines"

const API_KEY= import.meta.env.VITE_NEWS_API_KEY 



export default async function fetchNews(){

   
    try {

        console.log( ` testing : ${BASE_URL}?sources=techcrunch&apiKey=${API_KEY}`);

        const {data}=await axios.get(`${BASE_URL}`,{
            params:{
                sources:'techcrunch',
                apiKey: API_KEY    
            },
            headers: {
                'User-Agent': 'react-super-app',
              },
        
        })
        return data
    } catch (error) {
        console.error(error)
    }

}