import React, { useState } from 'react'
import  styles  from './NotesWidget.module.css';


export default function NotesWidget() {
    const [notes,setNotes]=useState(JSON.parse(localStorage.getItem("notes")))

function handleChange(e){
    setNotes(e.target.value)
    localStorage.setItem("notes",JSON.stringify(notes))

}
    
  return (
    <div className={styles.container}>

        <h2>All notes</h2>
        <textarea placeholder='Kindly add your notes here'  spellCheck="false" className={styles.textarea} value={notes} onChange={(e)=>{handleChange(e)}} ></textarea>
    </div>
  )
}
