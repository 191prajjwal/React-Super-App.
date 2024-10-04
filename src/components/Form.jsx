import styles from './Form.module.css'
import React, { useState } from 'react'

//we are 

export default function Form({name,setName,username,setUserName,email,setEmail,mobile,setMobile,error,setError,handleSubmit}) {
 
    

   
   

  return (
    <div className={styles.container} >


        <form className={styles.form}  onSubmit={handleSubmit}>

           <input type="text"
            placeholder='Name'
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
           /> 

           {error?.name && <p className={styles.error}>Name is required</p>}

           <input type="text"
            placeholder='Username'
            value={username}
            onChange={(e)=>{setUserName(e.target.value)}}
           /> 
            {error?.username && <p className={styles.error}>Username is required</p>}
            

           <input type="email"
            placeholder='Email'
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
           /> 
            {error?.email && <p className={styles.error}>Valid Email is required</p>}

           <input type="text"
            placeholder='Mobile no'
            value={mobile}
            onChange={(e)=>{setMobile(e.target.value)}}
           />
           
            {error?.mobile && <p className={styles.error}>Valid Mobile no. is required</p>}

           <div className={styles.checkbox}>
           <input type="checkbox"
            /> <span>Share my registration data with Superapp</span>
           </div>

           <button>SIGN UP</button>
        </form>
    </div>
  )
}
