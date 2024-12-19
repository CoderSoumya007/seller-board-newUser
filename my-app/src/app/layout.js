import './globals.css'
import '../styles/components.css'

export const metadata = {
  title: 'Amazon Opportunity Tracker',
  description: 'Track and analyze Amazon product opportunities',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

