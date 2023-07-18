import styles from './page.module.css'
import {FcGoogle} from 'react-icons/fc'

export default function Login() {
  return (
    <div className={styles.container}>
        <div className={styles.box}>
            <h2 className='font-bold text-4xl'>Join Thorts, <br />Share your Thoughts</h2>
            <div className='py-4'>
                <h3 className='py-4 min-w-fit'>Sign in with one of the providers</h3>
                <button className='bg-white text-gray-700 w-full rounded-2xl flex align-middle p-4 gap-4'>
                    <FcGoogle className='text-2xl '/>
                    Sign in with Google
                </button>
            </div>
        </div>
    </div>
  )
}
