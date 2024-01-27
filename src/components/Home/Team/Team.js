import React, { useEffect, useState } from 'react'
import styles from './Team.module.scss'
import axios from 'axios'
const Team = () => {
    //////////////////get data/////////////
    const [data,setData]=useState([])
    const baseUrl='http://emc2db-001-site1.itempurl.com' 
    const urlGet='/api/TeamMember/GetAllMembers'
  
    useEffect(() => {
      // Make a GET request to fetch text data
      axios.get(`${baseUrl}${urlGet}`)
        .then(response => {
          // Handle text data
          setData(response.data);
        })
        .catch(error => {
          console.error("Error fetching text data:", error);
        });
    }, []);
  return (
    <div className={`${styles.container} structure`}>
        <span>Meet</span>
        <h1 className='main_title'>Our Team</h1>
        <div>
          {data.map((d,i)=>(
            <div className={styles.card} key={i}>
              <img  src={`data:image/jpeg;charset=utf-8;base64,${d.image}`} alt="" />
              <div className={styles.text}>
                <span>{d.name}</span>
                <span>{d.title}</span>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Team