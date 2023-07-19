"use client"
import styles from './page.module.css'
import { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import {FcGoogle} from 'react-icons/fc'
import { userAuthContext } from '@/app/context/UserAuthContext'

export default function Login() {
    const {signUp, googleSignIn} = useContext(userAuthContext);
    const [ error, setError ] = useState('')
    const { push } = useRouter();

    const handleGoogleSignUp = async (e) =>{
        e.preventDefault();
        try{
            await googleSignIn();
            push("/");
        }catch(err){
            setError(err.message)
            console.log(error)
        }
    }
  return (
    <div className={styles.container}>
        <div className={styles.box}>
            <h2 className='font-bold text-4xl'>Join Thorts, <br />Share Thoughts</h2>
            <div className='py-4'>
                <h3 className='py-4 min-w-fit'>Sign in with one of the providers</h3>
                <button onClick={handleGoogleSignUp} className='bg-white text-gray-700 w-full rounded-2xl flex align-middle p-4 gap-4'>
                    <FcGoogle className='text-2xl '/>
                    Continue with Google
                </button>
            </div>
        </div>
    </div>
  )
}
