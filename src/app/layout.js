import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Room homepage master',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html className='text-rem font-my-font' lang="en">
      <body>{children}</body>
    </html>
  )
}
