import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Affordable Website Design & Development Services in Delhi',
  description: 'Professional website design and development services in Delhi. We specialize in responsive, SEO-friendly websites tailored to your business needs.',
  keywords: 'website design Delhi,markitfy,markitfy.in,web agency near me, custom website development, responsive websites, SEO-friendly websites, small business website design,custom web app development Delhi,affordable graphic designing services,affordable SEO services Delhi',
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
