import Navbar from '@/components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import RigthSideBar from '@/components/RightSideBar/RigthSideBar'
import { UserAuthProvider } from './context/UserAuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserAuthProvider>
          <Navbar />
          
          {children}
          
        </UserAuthProvider>
        <div className='sidebar'><RigthSideBar /></div>
      </body>
    </html>
  )
}
