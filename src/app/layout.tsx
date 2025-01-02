import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mi Portfolio',
  description: 'Portfolio personal creado con Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
