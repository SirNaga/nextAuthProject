"use client"
import React, {useEffect, useState} from 'react'
import styles from './dashboard.module.css'

const Dashboard = () => {

  const[data,setData] = useState([])
  const[err,setErr] = useState(false)
  const[isLoading,setisLoading] = useState(false)

  useEffect(() =>{
    const getData = async ()=>{
      setisLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', 
        {cache: 'no-store'});
       
        if (!res.ok) {
          setErr(true);
          throw new Error('Failed to fetch data');
        }
       
        const data = await res.json();
        setData(data);
        setisLoading(false);
      };
      getData()
    }, []);
    console.log(data)


  return (
    <div className={styles.container}>
        Dashboard
    </div>
  )
}

export default Dashboard