import React from 'react'
import styles from './CarouselPage.module.css'
import ProfileWidget from '../components/ProfileWidget'
import WeatherWidget from '../components/WeatherWidget'
import { useNavigate } from 'react-router-dom'
import BooksWidget from '../components/BooksWidget'
export default function CarouselPage() 

{

  const navigate= useNavigate()

  function handleLogOut(){

    localStorage.clear()
    

  }
  return (
    <div className={styles.container}>
     <div className={styles.nav}>
    

<button className={styles.backbtn} onClick={()=>navigate("/genres")}>Back</button>

<button className={styles.btn} onClick={()=>navigate("/dashboard")}>Go to Dashboard</button>


<a className={styles.logout} onClick={handleLogOut} href="/register"> Logout</a>
     </div>

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
