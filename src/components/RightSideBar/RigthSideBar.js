import React from 'react'
import styles from './rightsidebar.module.css';

export default function RigthSideBar() {
    const communities = [
        {id: 1, name: 'Introductions'},
        {id: 2, name: 'What\'s New'},
        {id: 3, name: 'DesignNews'},
        {id: 4, name: 'Behance'},
        {id: 5, name: 'Figma Community'}
    ]

    const people = [
        {id: 1, name: 'Patrick Newman', hotlink: '@parickNewman'},
        {id: 2, name: 'Samuel', hotlink: '@0xSammie'},
        {id: 3, name: 'Anatoly Belik', hotlink: '@anatoly_belik'}
    ]
  return (
    <div className={styles.container}>
        {/* communities */}
        <div className={styles.communities}>
            <div className={styles.title}>TOP COMMUNITIES</div>
            <div className={styles.comms}>
                {communities.map(comm => (
                    <div className={styles.comm} key={comm.id}><div className={styles.commIcon}>{comm.name.charAt(0)}</div>{comm.name}</div>
                ))}
            </div>
        </div>
        {/* people */}
        <div className={styles.people}>
            <div className={styles.title}>SUGGESTED PEOPLE</div>
            <div className={styles.persons}>
                {
                    people.map(person => (
                        <div className={styles.person}>
                            <div className={styles.dp}>{person.name.charAt(0)}</div>
                            <div className={styles.info}>
                                <div className={styles.name}>{person.name}</div>
                                <div className={styles.hotlink}>{person.hotlink}</div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
