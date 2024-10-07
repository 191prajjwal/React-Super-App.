import React from 'react'
import styles from './CarouselPage.module.css'
import ProfileWidget from '../components/ProfileWidget'
import WeatherWidget from '../components/WeatherWidget'
import { useNavigate } from 'react-router-dom'
import BooksWidget from '../components/BooksWidget'
export default function CarouselPage() 

{

  const navigate= useNavigate()
  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={()=>navigate("/dashboard")}>Go to Dashboard</button>

	<div className={styles.profileWidget}>
        <ProfileWidget/>
    </div>


	<div className={styles.weatherWidget}>
    <WeatherWidget/>
  </div>


	<div className={styles.booksWidget}>
    <BooksWidget/>
  </div>

  
    </div>
  )
}
