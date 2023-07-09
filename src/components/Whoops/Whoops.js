import React from 'react'
import styles from './whoops.module.css'
import samDp from '../../../public/sam.jpg'
import patDp from '../../../public/pat.png'
import Image from 'next/image'

function Whoops() {
  const whoops = [
    {
      id: 1, 
      user: {
        name: 'Samuel Ibiyemi',
        profilePicture: samDp,
      },
      message: 'We are bootstapping @annepto a social individuals with successful people. If you are a mentor comment 🖐 and make it more🎤 useful society. Follow us on FB.',
      hashes: ['startup', 'programming', 'business', 'bootstrap', 'community'],
      time: 'Just now'
    },
    {
      id: 2, 
      user: {
        name: 'Patrick Newman',
        profilePicture: patDp,
      },
      message: 'We are bootstapping @annepto a social individuals with successful people. If you are a mentor comment 🖐 and make it more🎤 useful society. Follow us on FB.',
      hashes: ['startup', 'business', 'bootstrap', 'community'],
      time: 3,
    },
    {
      id: 3, 
      user: {
        name: 'Patrick Newman',
        profilePicture: patDp,
      },
      message: 'We are bootstapping @annepto a social individuals with successful people. If you are a mentor comment 🖐 and make it more🎤 useful society. Follow us on FB.',
      hashes: ['startup', 'business', 'bootstrap', 'community'],
      time: 3,
    },
    {
      id: 4, 
      user: {
        name: 'Patrick Newman',
        profilePicture: patDp,
      },
      message: 'We are bootstapping @annepto a social individuals with successful people. If you are a mentor comment 🖐 and make it more🎤 useful society. Follow us on FB.',
      hashes: ['startup', 'business', 'bootstrap', 'community'],
      time: 3,
    },
  ]

  return (
    <div className={styles.container}>
      {
        whoops.map(whoop => (
          <div className={styles.whoop} key={whoop.id}>
            <div className={styles.user}>

              <div className={styles.detail}>
                <div className={styles.dp}><Image src={whoop.user.profilePicture} alt={whoop.user.name.charAt(0)} className={styles.img}/></div>
                <div className={styles.name}>{whoop.user.name} </div>
              </div>

              <div className={styles.time}>
                {whoop.time === 'Just now' ? 'Just now' : whoop.time + ' mins ago'}
              </div>

            </div>

            <div className={styles.msgContainer}>
              <div className={styles.message}>{whoop.message}</div>
              <div className={styles.hashes}>{
                whoop.hashes.map((hash, index) => (
                  <div className={styles.hash} key={index}>#{ hash }</div>
                ))
              }</div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Whoops