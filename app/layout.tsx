import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Reezo AI',
  description: 'Powerful AI Shopping Assistant',
  generator: 'Reezo AI',
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
