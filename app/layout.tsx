import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Custom Website Development & Freelance Web Developer India | Markitfy',
  description: 'Get custom website development, WordPress, and ecommerce solutions from an expert freelance web developer in India. Affordable & SEO-optimized sites.',
  keywords: 'affordable web design, website development company, custom website design, web design for small business, SEO-friendly websites, custom web app development Delhi,affordable graphic designing services,markitfy,affordable SEO services Delhi',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
    
  return (
   
    <html lang="en">
       <head>
      <meta name="google-site-verification" content="IbVPW_wRQEXAX11JLh9K14mScwq-jKVNwa6pexSX8d4" />
    </head>
      <body>{children}</body>
    </html>

  )
}
