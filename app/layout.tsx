import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link rel="icon" href="/favicon.ico" />
      <body>
        <div className="mx-auto max-w-2xl px-6">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
