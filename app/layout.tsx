import Navbar from '@/components/navbar'
import '@/assets/styles/globals.css'

export const metadata = {
  title: 'Property Pulse',
  keywords: 'rental, property, real estate',
  description: 'Find the perfect rental property'
}

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default MainLayout
