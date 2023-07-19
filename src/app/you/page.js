"use client"
import React, { useContext } from 'react'
import styles from './page.module.css';
import Samdp from '../../../public/sam.jpg'
import Image from 'next/image';
import { userAuthContext } from '../context/UserAuthContext';

export default function page() {
    const { user } = useContext(userAuthContext)
    const userInfo = [
        {
          id: 1, 
          user: {
            name: 'Samuel Ibiyemi',
            profilePicture: Samdp,
            hotLink: '0xSammie'
          },
          follows: '5.2M',
          following: '13.2k',
          posts: '5.3k'
        },
        
      ]
    console.log(user);
  return (
    <div className={styles.container}>
        <div className={styles.userDetails}>

            <div className={styles.item}>
                <div className={styles.tracker}>
                    <div className={styles.top}>
                        <div className={styles.info}>
                            <div className={styles.title}>TOTAL VIEWS</div>
                            <div className={styles.num}>2.1M</div>
                        </div>
                        <div className={styles.graph}></div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.text}><span className={styles.impression}>+14%</span> vs previous week.</div>
                    </div>
                </div>
                <div className={styles.tracker}>
                    <div className={styles.top}>
                        <div className={styles.info}>
                            <div className={styles.title}>TOTAL FOLLOWERS</div>
                            <div className={styles.num}>5.2M</div>
                        </div>
                        <div className={styles.graph}></div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.text}><span className={styles.impression}>+14%</span> vs previous week.</div>
                    </div>
                </div>
                
            </div>
            

                <div className={styles.item} >
                    <div className={styles.imgContainer}><Image className={styles.img} alt="profile picture" src={user.photoURL} width={400}/></div>
                    <div className={styles.names}>
                        <div className={styles.name}>{user.displayName}</div>
                        <div className={styles.hotlink}>@{user.email}</div>
                    </div>
                    <div className={styles.influence}>
                        <div className={styles.posts}> <div className={styles.title}>posts</div></div>
                        <div className={styles.followers}><div className={styles.title}>followers</div></div>
                        <div className={styles.following}><div className={styles.title}>following</div></div>
                    </div>
                   
                    <div className={styles.edit}>Change Info</div>
                </div>
        
            
        </div>

    </div>
  )
}
