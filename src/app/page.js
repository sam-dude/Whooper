import Image from 'next/image'
import styles from './page.module.css';
import Whoops from '@/components/Whoops/Whoops';

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.head}>
        <div className={styles.item}>1231 NEWS</div>
        <div className={styles.item}>
          <div>Most Relevant</div>
          <div className={styles.active}>Rating</div>
          <div>Popularity</div>
        </div>
      </div>

      <Whoops />
    </main>
  )
}
