import type { Metadata } from 'next'
import '../src/styles/globals.css'

export const metadata: Metadata = {
  title: '.We - The Future of Networking',
  description: 'The Future of Networking is Private, Trusted, and Ad-Free.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

