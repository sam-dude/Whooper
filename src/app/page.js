import Image from 'next/image'
import styles from './page.module.css';
import Whoops from '@/components/Whoops/Whoops';
import Link from 'next/link';
import { auth } from '@/utils/firebase';
// import { useAuthState } from "react-firebase-hooks/auth"

export default function Home() {
  // const [user,  loading] = useAuthState(auth);

  return (
    <main className={styles.container}>
      <div className={styles.head}>
        <div className={styles.item}>1231 NEWS</div>
        <div className={styles.item}>
          <div>Most Relevant</div>
          <div className={styles.active}>Rating</div>
          <div>Popularity</div>
        </div>
        <div className={styles.item}>
          <Link href='/auth/login'>
            Join Now
          </Link>
        </div>
      </div>

      <Whoops />
    </main>
  )
}
