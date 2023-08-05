import './globals.css'
import { Inter } from 'next/font/google'
import getEntries from '@/utils/getEntries'
import { selectMeta } from '@/utils/selectors'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata() {
  let data = await getEntries('portfolio');

  const { ogTitle, ogDescription } = selectMeta(data) || {};

  return {
    title: ogTitle,
    description: ogDescription
  }
} 

export default function RootLayout({
  children
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
