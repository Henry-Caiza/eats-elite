
import './globals.css'
import Sidebar from '@/components/Sidebar'
import MenuMobil from '@/components/MenuMobil'
import MyStoreProvider from '@/providers/MenuProvider'
import ModalPayment from '@/components/ModalPayment'



export const metadata = {
  title: 'Eats Elite',
  description: 'Your digital destination to discover and indulge in the most exquisite culinary treasures.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='dark '>

      <body className='bg-secondaryDark w-full min-h-screen'>

        <MyStoreProvider>
          <Sidebar />
          <ModalPayment />
          {children}
          <MenuMobil />
        </MyStoreProvider>
      </body>

    </html>
  )
}
