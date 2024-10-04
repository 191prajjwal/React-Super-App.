import styles from "./GenreRow.module.css"
 
import fetchMoviesByGenre from "../api/fetchMovies"
import { useEffect, useState } from "react"

const genreIDs=[28,18,10749,53,37,27,14,10402,878]

export default function GenreRow({genreIndex}) {

const [data,setData]= useState([])

    const genreID= genreIDs[genreIndex];

    const movieInfo=[]
    useEffect(()=>{

        fetchMoviesByGenre(genreID).then((data)=>{

         const{results}=data

         console.log(results.slice(0,4)[0])

         

            setData(results)


           
      
          
        })
    },[])

   
  return (
    <div className={styles.container}>
        <div className={styles.movies}>
          {data.map((movie,index)=>{
            return (<img key={index} className={styles.movie} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>)
          })}
        </div>

    </div>
  )
}
