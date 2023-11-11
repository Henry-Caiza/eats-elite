'use client'
import Link from "next/link"
import { GoHome, GoGear } from 'react-icons/go'
import { LuBadgePercent } from 'react-icons/lu'
import { AiOutlinePieChart } from 'react-icons/ai'
import { IoMailOutline, IoLogOutOutline } from 'react-icons/io5'
import { PiBellSimpleLight } from 'react-icons/pi'
import { useContext } from "react"
import { StoreContext } from "@/providers/MenuProvider"
import { usePathname } from "next/navigation"

import icoStore from '@/public/store.png'
import Image from "next/image"



function Sidebar() {
    const { showMenu } = useContext(StoreContext)
    const pathname = usePathname()

    return (
        <div className={`${showMenu ? 'left-0' : '-left-full'} bg-dark fixed top-0 w-28 h-full flex flex-col justify-between py-2 rounded-tr-xl rounded-br-xl z-50 lg:left-0 transition-all`}>
            <div>
                <ul className="  pl-4">
                    <li className="bg-orangeDark/10 w-14 h-14 rounded-xl p-2 mx-auto mb-2">
                        <Link href='/' className=" ">
                            {/* <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">Side</h1> */}
                            <Image src={icoStore} alt="logo store" className="" />
                        </Link>
                    </li>
                    <li className={`p-4 rounded-tl-xl rounded-bl-xl hover:bg-secondaryDark group transition-colors ${pathname === '/' || pathname === '/cold' || pathname === '/soup' || pathname === '/grill' ? 'bg-secondaryDark' : ''}`}>
                        <Link href='/' className={`  p-4 flex justify-center rounded-xl group-hover:bg-orangeDark transition-colors ${pathname === '/' || pathname === '/cold' || pathname === '/soup' || pathname === '/grill' ? 'bg-orangeDark' : ''}`}>
                            <GoHome className={`text-2xl group-hover:text-white ${pathname === '/' || pathname === '/cold' || pathname === '/soup' || pathname === '/grill' ? 'text-white' : 'text-orangeDark'}`} />
                        </Link>
                    </li>
                    <li className="p-4 rounded-tl-xl rounded-bl-xl hover:bg-secondaryDark group transition-colors">
                        <Link href='/' className="  p-4 flex justify-center rounded-xl group-hover:bg-orangeDark transition-colors">
                            <LuBadgePercent className="text-2xl text-orangeDark group-hover:text-white transition-colors" />
                        </Link>
                    </li>
                    <li className={`p-4 rounded-tl-xl rounded-bl-xl hover:bg-secondaryDark group transition-colors ${pathname === '/dashboard' ? 'bg-secondaryDark' : ''}`}>
                        <Link href='/dashboard' className={`  p-4 flex justify-center rounded-xl group-hover:bg-orangeDark transition-colors ${pathname === '/dashboard' ? 'bg-orangeDark' : ''} `}>
                            <AiOutlinePieChart className={`text-2xl group-hover:text-white ${pathname === '/dashboard' ? 'text-white' : 'text-orangeDark'}`} />
                        </Link>
                    </li>
                    <li className={`p-4 rounded-tl-xl rounded-bl-xl hover:bg-secondaryDark group transition-colors ${pathname === '/messages' ? 'bg-secondaryDark' : ''}`}>
                        <Link href='/messages' className={`  p-4 flex justify-center rounded-xl group-hover:bg-orangeDark transition-colors ${pathname === '/messages' ? 'bg-orangeDark' : ''} `}>
                            <IoMailOutline className={`text-2xl text-orangeDark group-hover:text-white transition-colors ${pathname === '/messages' ? 'text-white' : 'text-orangeDark'}`} />
                        </Link>
                    </li>
                    <li className={`p-4 rounded-tl-xl rounded-bl-xl  hover:bg-secondaryDark group transition-colors  ${pathname === '/notifications' ? 'bg-secondaryDark' : ''}`}>
                        <Link href='/notifications' className={`  p-4 flex justify-center rounded-xl group-hover:bg-orangeDark transition-colors ${pathname === '/notifications' ? 'bg-orangeDark' : ''} `}>
                            <PiBellSimpleLight className={`text-2xl text-orangeDark group-hover:text-white transition-colors ${pathname === '/notifications' ? 'text-white' : 'text-orangeDark'}`} />
                        </Link>
                    </li>
                    <li className={`p-4 rounded-tl-xl rounded-bl-xl hover:bg-secondaryDark group transition-colors ${pathname === '/settings' ? 'bg-secondaryDark' : ''}`}>
                        <Link href='/settings'
                            className={`p-4 flex justify-center rounded-xl group-hover:bg-orangeDark transition-colors ${pathname === '/settings' ? 'bg-orangeDark' : ''}`}>
                            <GoGear className={`text-2xl group-hover:text-white ${pathname === '/settings' ? 'text-white' : 'text-orangeDark'}`} />
                        </Link>
                    </li>


                </ul>
            </div>
            <div>
                <ul className="pl-4">
                    <li className="p-4 rounded-tl-xl rounded-bl-xl hover:bg-secondaryDark group transition-colors">
                        <Link href='/' className="  p-4 flex justify-center rounded-xl group-hover:bg-orangeDark transition-colors">
                            <IoLogOutOutline className="text-2xl text-orangeDark group-hover:text-white transition-colors" />
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar