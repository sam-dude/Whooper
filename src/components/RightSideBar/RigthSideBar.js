import React from 'react'
import styles from './rightsidebar.module.css';
import Communities from '../Communities/Communities';
import People from '../People/People';

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
        <Communities communities={communities}/>
        {/* people */}
        <People people={people}/>
    </div>
  )
}
