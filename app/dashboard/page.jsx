'use client'
import TableOrder from '@/components/TableOrders'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { BsBookmarkDash, BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs'
import { HiOutlineUsers } from 'react-icons/hi2'
import { LuSettings2 } from 'react-icons/lu'
import { GoChevronDown } from 'react-icons/go'

import { NextUIProvider } from "@nextui-org/react";
import OrderCard from '@/components/OrderCard'

import dishImg1 from '@/public/assets/dishes/3.png'
import dishImg2 from '@/public/assets/dishes/grill1.png'
import dishImg3 from '@/public/assets/dishes/cold2.png'
import Image from 'next/image'
import Chart from '@/components/Chart'

function DashboardPage() {
    return (
        <NextUIProvider>
            <div className='text-gray-200 w-full h-full lg:pl-28 pb-16 lg:pb-0 '>
                <main className='w-full p-6 grid grid-cols-12 gap-4 lg:gap-8'>
                    <section className="col-span-8">
                        <div className="border-b border-gray-700 pb-4">
                            <h1 className=' text-2xl text-gray-300 font-bold'>Dashboard</h1>
                            <p className='text-gray-500'>Monday 5 Nov, 2023</p>
                        </div>
                        <div className="grid grid-cols-6  w-full  pt-8 rounded-lg gap-4 lg:gap-8">
                            <div className="w-full col-span-full grid grid-cols-3 gap-4 xl:gap-8 h-[20%]">
                                <div className="h-36 w-full bg-dark rounded-lg py-4 px-4 xl:py-4 xl:px-8 flex flex-col gap-2">
                                    <div className='flex items-center justify-start gap-4  text-emerald-400'>
                                        <div className='w-10 h-10 bg-secondaryDark rounded-md flex items-center justify-center'>
                                            <AiOutlineDollarCircle className='text-xl text-indigo-400' />
                                        </div>
                                        <div className='flex gap-2'>
                                            <span className='text-xs'>+32.40%</span>
                                            <BsArrowUpShort className='rounded-full bg-emerald-400/20' />
                                        </div>
                                    </div>
                                    <span className='text-2xl font-semibold'>$10,243.00</span>
                                    <span className='text-xs xl:text-sm text-gray-400'>Total Revenue</span>
                                </div>
                                <div className="h-36  bg-dark rounded-lg py-4 px-4 xl:py-4 xl:px-8 flex flex-col gap-2">
                                    <div className='flex items-center justify-start gap-4  text-red-400'>
                                        <div className='w-10 h-10 bg-secondaryDark rounded-md flex items-center justify-center'>
                                            <BsBookmarkDash className='text-xl text-amber-400' />
                                        </div>
                                        <div className='flex gap-2'>
                                            <span className='text-xs'>-12.33%</span>
                                            <BsArrowDownShort className='rounded-full bg-red-400/20' />
                                        </div>
                                    </div>
                                    <span className='text-2xl font-semibold'>23,456</span>
                                    <span className='text-xs xl:text-sm text-gray-400'>Total Dish Ordered</span>
                                </div>
                                <div className="h-36  bg-dark rounded-lg py-4 px-4 xl:py-4 xl:px-8 flex flex-col gap-2">
                                    <div className='flex items-center justify-start gap-4  text-emerald-400'>
                                        <div className='w-10 h-10 bg-secondaryDark rounded-md flex items-center justify-center'>
                                            <HiOutlineUsers className='text-xl text-sky-400' />
                                        </div>
                                        <div className='flex gap-2'>
                                            <span className='text-xs'>+2.40%</span>
                                            <BsArrowUpShort className='rounded-full bg-emerald-400/20' />
                                        </div>
                                    </div>
                                    <span className='text-2xl font-semibold'>1,234</span>
                                    <span className='text-xs xl:text-sm text-gray-400'>Total Customer</span>
                                </div>
                            </div>
                            <article className="col-span-full h-[53vh] rounded-lg bg-dark py-6">
                                <div className="flex items-center justify-between px-6 ">
                                    <h2 className="text-lg font-semibold">Order Report</h2>
                                    <button className="flex items-center justify-between border border-gray-500 py-2 px-4 gap-2 rounded-lg">
                                        <p className="text-sm">Filter Order</p>
                                        <LuSettings2 />
                                    </button>
                                </div>

                                <TableOrder />

                                {/* <div className='grid grid-cols-4 px-6 border-b border-gray-700 py-4'>
                                <h3>Customer</h3>
                                <h3>Menu</h3>
                                <h3>Total Payment</h3>
                                <h3>Status</h3>
                            </div>
                            <div className='grid grid-cols-4 px-6 border-b border-gray-700 py-4'>
                                <h3>Customer</h3>
                                <h3>Menu</h3>
                                <h3>Total Payment</h3>
                                <h3>Status</h3>
                            </div> */}
                            </article>
                        </div>
                    </section>
                    <section className=" col-span-4 flex flex-col gap-4 lg:gap-8">
                        <article className="w-full h-[55%] bg-dark rounded-lg py-6 px-4">
                            <div className="flex items-center justify-between border-b border-gray-700 pb-3">
                                <h2 className="text-lg font-semibold">Most Ordered</h2>
                                <button className="flex items-center justify-between border border-gray-500 py-2 px-4 gap-2 rounded-lg">
                                    <p className="text-sm">Select a time</p>
                                    <GoChevronDown />
                                </button>
                            </div>
                            <div className='w-full h-[84%] flex flex-col justify-between pt-6'>
                                <div className='flex w-full flex-col gap-4'>
                                    <div className='flex items-center gap-2'>
                                        <Image src={dishImg1} alt="" className='w-10 h-10' />
                                        <div className='w-4/5'>
                                            <h4 className='truncate text-sm'>Spicy seasoned seafood noodles</h4>
                                            <p className='text-gray-500 text-xs'>200 dishes ordered</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <Image src={dishImg2} alt="" className='w-10 h-10' />
                                        <div className='w-4/5'>
                                            <h4 className='truncate text-sm'>Spicy seasoned seafood noodles</h4>
                                            <p className='text-gray-500 text-xs'>80 dishes ordered</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <Image src={dishImg3} alt="" className='w-10 h-10' />
                                        <div className='w-4/5'>
                                            <h4 className='truncate text-sm'>Spicy seasoned seafood noodles</h4>
                                            <p className='text-gray-500 text-xs'>120 dishes ordered</p>
                                        </div>
                                    </div>
                                </div>
                                <button className='text-orangeDark border-2 border-orangeDark w-full rounded-lg py-2 '>
                                    View all
                                </button>
                            </div>

                        </article>
                        <article className="w-full h-[45%] bg-dark rounded-lg py-6 px-4">
                            <div className="flex items-center justify-between border-b border-gray-700 pb-3">
                                <h2 className="text-lg font-semibold">Most Type of Order</h2>
                                <button className="flex items-center justify-between border border-gray-500 py-2 px-4 gap-2 rounded-lg">
                                    <p className="text-sm">Select a time</p>
                                    <GoChevronDown />
                                </button>
                            </div>
                            <div className='h-[80%] w-full bg-dark dark pt-1.5'>
                                <Chart />
                            </div>
                        </article>
                    </section>
                </main>
            </div>
        </NextUIProvider>

    )
}

export default DashboardPage