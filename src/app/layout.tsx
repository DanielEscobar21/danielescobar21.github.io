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
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen bg-light-base dark:bg-dark-base text-neutral-900 dark:text-neutral-100 selection:bg-primary-200 dark:selection:bg-primary-900 selection:text-primary-900 dark:selection:text-primary-100">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
