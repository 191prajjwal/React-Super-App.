import React, { useEffect, useState } from 'react'
import fetchNews from "../api/fetchNews";

import styles from "./NewsWidget.module.css"
import { Link } from 'react-router-dom';

export default function NewsWidget() {
  const [newsData,setNewsData]= useState()

  useEffect(()=>{

  
     fetchNews().then((data)=>{
      const randomIndex= Math.floor(Math.random()*(data.articles.length))
      setNewsData(data.articles[randomIndex])
    })
  },[])
  return (
    <div className={styles.container}>

<div className={styles.header}>

<img src={newsData?.urlToImage} alt="image" />

<div className={styles.about}>
<h3>{newsData?.title}</h3>
<p>Published on : {(new Date(newsData?.publishedAt).toLocaleString('en-IN',{ day:'2-digit', month:'2-digit',year:'2-digit',hour:"numeric",minute:"numeric",}))}</p>
</div>

</div>

<article>{newsData?.description}</article>

<Link to ={`${newsData?.url}`} target="_blank">Read More</Link>
    </div>
  )
}
