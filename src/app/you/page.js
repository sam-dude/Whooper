import React from 'react'
import styles from './page.module.css';
import Samdp from '../../../public/sam.jpg'
import Image from 'next/image';

export default function page() {

    const user = [
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
            
            {user.map(e => (
                <div className={styles.item} key={e.id}>
                    <div className={styles.imgContainer}><Image className={styles.img} src={e.user.profilePicture}/></div>
                    <div className={styles.names}>
                        <div className={styles.name}>{e.user.name}</div>
                        <div className={styles.hotlink}>@{e.user.hotLink}</div>
                    </div>
                    <div className={styles.influence}>
                        <div className={styles.posts}>{e.posts} <div className={styles.title}>posts</div></div>
                        <div className={styles.followers}>{e.follows}<div className={styles.title}>followers</div></div>
                        <div className={styles.following}>{e.following}<div className={styles.title}>following</div></div>
                    </div>
                   
                    <div className={styles.edit}>Change Info</div>
                </div>
            ))}
            
        </div>

    </div>
  )
}
