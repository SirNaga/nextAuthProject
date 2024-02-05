import React from 'react'
import Image from 'next/image'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        Web Engineering Project WS2023</div> 
      <div>
        <Image src="/bannerfooter.JPG" width={90} height={20} alt="Banner"></Image>
      </div>
    </div>
  )
}

export default Footer