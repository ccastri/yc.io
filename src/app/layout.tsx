'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Rajdhani } from 'next/font/google'
import Navbar from './_components/Navbar'
import Footer from './_components/Footer'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

const inter = Inter({ subsets: ['latin'] })
const radjhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700", "300", "400", "500", "600", "700"],
  subsets:['devanagari'],
  display:'swap'
}
)
// export const metadata: Metadata = {
//   title: 'YC.io',
//   description: 'Web app for mannaging medical devices',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={radjhani.className}>
      {/* <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link> */}
      <body className='flex flex-col h-screen'>
        <Navbar/>
        <main className='flex-grow'>
         <LocalizationProvider dateAdapter={AdapterMoment}>

          {children}
         </LocalizationProvider>
        </main>
        {/* <Footer/> */}
      </body>
    </html>
  )
}
