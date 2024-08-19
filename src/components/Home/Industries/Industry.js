import React, { useEffect, useState } from 'react'
import styles from './Industry.module.scss'
import axios from 'axios'
const Industry = () => {
      //////////////////get data/////////////
  const [data,setData]=useState([])

  const baseUrl='http://emc2db-001-site1.itempurl.com' 
  const urlGet='/api/Industry/GetAlIndustries'

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
    <div className={`${styles.container} structure`} id="industries">
        <h1 className='main_title'>Industries We Serve</h1>
        <div className={styles.all_services}>
        {data.map((d, i) => (
          <div key={i} className={styles.service}>
            <img
              className="w-40"
              src={`data:image/svg+xml;base64,${d.icon}`}
              alt=""
            />
            <img
              className="w-50"
              src={`data:image/jpeg;charset=utf-8;base64,${d.icon}`}
              alt=""
            />
            <span>{d.name}</span>
          </div>
        ))}
        </div>

    </div>
  )
}

export default Industry