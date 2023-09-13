"use client"
import Sidebar from '@/components/sidebar'
import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import 'doodle.css/doodle.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pavan Munaganti',
  description: 'Pavan Munaganti\' personal portfolio',
}

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <html lang="en">
      <Head>
      </Head>
      <body className="doodle">
        <Sidebar isOpen={sidebarOpen}></Sidebar>
        <main className={`main_content ${sidebarOpen ? 'move_main_content' : ''}`}>
          <div className="trigger" onClick={toggleSidebar}>{sidebarOpen? "<<" : ">>"}</div>
          {children}
        </main>
      </body>
    </html>
  )
}
