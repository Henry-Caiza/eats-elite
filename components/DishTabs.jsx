'use client'
import Link from 'next/link'

import { usePathname } from 'next/navigation'
import DishCardGrid from './DishCardGrid'


function DishTabs() {

  const pathname = usePathname()

  return (
    <>
      <nav className='flex items-center justify-between border-b pb-[5.5px] border-gray-700 mb-6 md:justify-start md:gap-8'>

        <Link href='/' className={`mr-4 relative  group hover:text-orangeDark ${pathname === '/' || pathname === '/settings' ? 'text-orangeDark' : 'text-white'}`}>
          Hot dishes
          <span className={`h-[3px] inline-block rounded-full bg-orangeDark absolute left-0 -bottom-2 group-hover:w-2/3 transition-[width] ease duration-300 ${pathname === '/' || pathname === '/settings' ? 'w-2/3' : 'w-0'} 
            `}
          ></span>
        </Link>
        <Link href='/cold' className={`mr-4 relative group hover:text-orangeDark ${pathname === '/cold' ? 'text-orangeDark' : 'text-white'}`}>
          Cold dishes
          <span className={`h-[3px] inline-block bg-orangeDark absolute left-0 -bottom-2 group-hover:w-2/3 transition-[width] ease duration-300 ${pathname === '/cold' ? 'w-2/3' : 'w-0'} 
            `}

          ></span>
        </Link>
        <Link href='/soup' className={`mr-4 relative group hover:text-orangeDark ${pathname === '/soup' ? 'text-orangeDark' : 'text-white'} `}>
          Soup
          <span className={`h-[3px] inline-block bg-orangeDark absolute left-0 -bottom-2 group-hover:w-2/3 transition-[width] ease duration-300 ${pathname === '/soup' ? 'w-2/3' : 'w-0'} 
            `}

          ></span>
        </Link>
        <Link href='/grill' className={`mr-4 relative group hover:text-orangeDark ${pathname === '/grill' ? 'text-orangeDark' : 'text-white'}`}>
          Grill
          <span className={`h-[3px] inline-block bg-orangeDark absolute left-0 -bottom-2 group-hover:w-2/3 transition-[width] ease duration-300 ${pathname === '/grill' ? 'w-2/3' : 'w-0'} 
            `}

          ></span>
        </Link>

      </nav>
      {pathname !== '/settings' ?
        <DishCardGrid pathname={pathname} /> : null
      }
    </>

  )
}

export default DishTabs
