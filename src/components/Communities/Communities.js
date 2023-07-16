import React from 'react'
import styles from './communities.module.css'

export default function Communities({communities}) {
  return (
    <div className={styles.communities}>
        <div className={styles.title}>TOP COMMUNITIES</div>
        <div className={styles.comms}>
            {communities.map(comm => (
                <div className={styles.comm} key={comm.id}><div className={styles.commIcon}>{comm.name.charAt(0)}</div>{comm.name}</div>
            ))}
        </div>
    </div>
  )
}
