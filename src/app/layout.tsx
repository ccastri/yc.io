'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './_components/Navbar'
import Footer from './_components/Footer'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YC.io',
  description: 'Web app for mannaging medical devices',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col h-screen'>
        <Navbar/>
        <main className='flex-grow'>
         <LocalizationProvider dateAdapter={AdapterMoment}>

          {children}
         </LocalizationProvider>
        </main>
        <Footer/>
      </body>
    </html>
  )
}
