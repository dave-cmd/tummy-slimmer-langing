
import Layout from '@/layout/Layout'
// import './globals.css'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nutristerk Organics | Your story starts with us.',
  description: 'Online supplement store',
  keywords: ["Weight loss", "Green tea", "lose weight", "fat burner", "burn belly fat", "healthy eating", "diet", "how to lose weight", "diet plans", "lose weight fast", "fat burner", "diet play"],
  robots: {
    
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="../public/favicon.ico" />
      <body >
        {children}
      </body>
    </html>
  )
}
