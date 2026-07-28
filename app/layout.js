import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['400','500','600','700','800'], display: 'swap' })

export const metadata = {
  title: 'ADVpost — India\'s #1 Business Network',
  description: 'Promote Products. Reach Customers. Grow Business.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
