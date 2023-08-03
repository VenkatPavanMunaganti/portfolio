import Sidebar from '@/components/sidebar'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pavan Munaganti',
  description: 'Pavan Munaganti\' personal portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
      </Head>
      <body>
        <Sidebar></Sidebar>
        <main className="main_content">{children}</main>
      </body>
    </html>
  )
}
