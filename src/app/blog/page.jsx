import React from 'react'
import styles from './blog.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', 
  {cache: 'no-store'})
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

const Blog = async () => {

  const data= await getData();
  return (
    <div className={styles.mainContainer}> 
        <div className={styles.headline}>
        Blogposts
        </div>
        {data.map((item) => (
          <Link href='/blog/testID' className={styles.container} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>
              {item.title}</h1>
            <div>
              <Image src='/img4.png' alt='' width={400} height={400} className={styles.image}/>
            </div>
            <p className={styles.comment}>
              {item.body}</p>
          </div>
          </Link>
        ))}
    </div>
  );
};

export default Blog