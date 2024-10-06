import React from 'react'
import styles from './Dashboard.module.css'
import ProfileWidget from './../components/ProfileWidget';
import WeatherWidget from './../components/WeatherWidget';
import NewsWidget from './../components/NewsWidget';
import TimerWidget from '../components/TimerWidget';
import NotesWidget from '../components/NotesWidget';
import { useNavigate } from 'react-router-dom';



export default function Dashboard() {

	const navigate = useNavigate()
  return (
<div className={styles.container}>


	<div className={styles.profileWidget}>
		<ProfileWidget/>
	</div>
	<div className={styles.weatherWidget}><WeatherWidget/></div>
	<div className={styles.timerWidget}><TimerWidget/></div>
	<div className={styles.notesWidget}><NotesWidget/></div>
	<div className={styles.newsWidget}><NewsWidget/></div>
     <button className={styles.btn} onClick={()=>navigate("/movies")}>Browse</button>

</div>
  )
}
