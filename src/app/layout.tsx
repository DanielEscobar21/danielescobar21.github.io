import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '../context/ThemeContext'

export const metadata: Metadata = {
  title: 'Daniel Escobar | Software Engineer',
  description: 'Portfolio personal de Daniel Escobar, Ingeniero de Software',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth dark">
      <body className="min-h-screen bg-light-base dark:bg-dark-base text-gray-900 dark:text-gray-100">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
