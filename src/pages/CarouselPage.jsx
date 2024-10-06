import React from 'react'
import styles from './CarouselPage.module.css'
import ProfileWidget from '../components/ProfileWidget'
import WeatherWidget from '../components/WeatherWidget'
import NewsWidget from '../components/NewsWidget'
import { useNavigate } from 'react-router-dom'
export default function CarouselPage() 

{

  const navigate= useNavigate()
  return (
    <div className={styles.container}>

	<div className={styles.profileWidget}>
        <ProfileWidget/>
    </div>


	<div className={styles.weatherWidget}>
    <WeatherWidget/>
  </div>


	<div className={styles.newsWidget}>
    <NewsWidget/>
  </div>

  <button className={styles.btn} onClick={()=>navigate("/dashboard")}>Go to Dashboard</button>
    </div>
  )
}
