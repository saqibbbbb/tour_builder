import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TourBuilder',
  description: 'A tool for creating and sharing interactive tours',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
