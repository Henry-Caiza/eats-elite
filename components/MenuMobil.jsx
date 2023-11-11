'use client'
import { RiMenuFill, RiUser3Line } from 'react-icons/ri'
import { GoHome } from 'react-icons/go'
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from 'react-icons/ai'

import { StoreContext } from '@/providers/MenuProvider'
import { useContext } from 'react'


function MenuMobil() {
  const { toggleMenu, toggleOrder, showMenu } = useContext(StoreContext)
  return (
    <nav className="lg:hidden bg-dark fixed w-full left-0 bottom-0 text-xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
      <button className='p-2'>
        <RiUser3Line />
      </button>
      <button
        onClick={toggleOrder}
        className='p-2'>
        <AiOutlineShoppingCart />
      </button>
      <button
        className='p-2'>
        <GoHome />
      </button>
      <button
        onClick={toggleMenu}
        className='text-orangeDark p-2'>
        {showMenu ? <AiOutlineCloseCircle /> : <RiMenuFill />}

      </button>
    </nav>
  )
}

export default MenuMobil