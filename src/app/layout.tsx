"use client"
import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProviders } from './Theme-providers'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
    return (
    <html lang="en">
      <head>
        <title>Portfolio - Rafael Brito</title>
        <meta name="description" content='Conheça um pouco sobre mim e sobre o meu trabalho.' />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className} >
        <ThemeProviders>
          <div>
            <main className="light:bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
                <Navbar />
              {children}
            </main>
          </div>
        </ThemeProviders>
      </body>
    </html>
  )
}
