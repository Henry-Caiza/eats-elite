'use client'
import { HiOutlineCreditCard } from 'react-icons/hi'
import { AiFillCheckCircle } from 'react-icons/ai'
import { TbBrandPaypal, TbCash } from 'react-icons/tb'

import { useContext } from 'react'
import { StoreContext } from '@/providers/MenuProvider'

import ButtonTypes from './ButtonTypes'




function Payment() {

    const { toggleOrder, showOrder, toggleModal, showModal } = useContext(StoreContext)
    //console.log(showOrder);
    return (

        <section className={`lg:col-span-2 fixed lg:sticky bg-dark top-0 w-full h-screen z-40 transition-all ${showOrder ? 'right-0' : '-right-full'}`}>
            <div className='relative pt-7 text-gray-100 px-4'>
                <div className=' border-b border-gray-700 pb-6 mb-6 flex flex-col gap-2'>
                    <h2 className='text-2xl'>Payment</h2>
                    <p className='text-sm text-gray-400'>3 payment method available</p>
                </div>
            </div>
            <div className='px-4 w-full h-[80vh] lg:h-[80vh] relative flex flex-col justify-between'>
                <div className='flex flex-col gap-4'>
                    <h3 className='text-gray-100'>Payment Method</h3>
                    <div className='grid grid-cols-3 gap-2'>
                        <div className='border-2 bg-gray-500/20 border-gray-500 rounded-md flex flex-col gap-2 items-center justify-center p-2 cursor-pointer relative '>
                            <HiOutlineCreditCard className='w-8 h-5 ' />
                            <span className='text-xs'>Credit Card</span>
                            <AiFillCheckCircle className='absolute right-1 top-1 text-orangeDark ' />
                        </div>
                        <div className='border-2 border-gray-700 text-gray-400 rounded-md flex flex-col gap-2 items-center justify-center p-2 cursor-pointer relative hover:border-gray-500 hover:bg-gray-500/20 group transition-colors hover:text-gray-100'>
                            <TbBrandPaypal className='w-8 h-5 ' />
                            <span className='text-xs '>Paypal</span>
                            <AiFillCheckCircle className='absolute right-1 top-1 text-orangeDark opacity-0 group-hover:opacity-100' />
                        </div>
                        <div className='border-2 border-gray-700 text-gray-400 rounded-md flex flex-col gap-2 items-center justify-center p-2 cursor-pointer relative hover:border-gray-500 hover:bg-gray-500/20 group transition-colors hover:text-gray-100'>
                            <TbCash className='w-8 h-5 ' />
                            <span className='text-xs'>Cash</span>
                            <AiFillCheckCircle className='absolute right-1 top-1 text-orangeDark opacity-0 group-hover:opacity-100' />
                        </div>

                    </div>
                    <form action="" className='flex flex-col border-b pb-6 border-gray-700 gap-2'>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="name" className='text-xs'>Cardholder Name</label>
                            <input
                                type="text"
                                name='name'
                                id='name'
                                className='w-full bg-secondaryDark py-3 px-4 rounded-lg text-gray-300 text-sm outline-none'
                                defaultValue='Levi Ackerman'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="number" className='text-xs'>Card Number</label>
                            <input
                                type="text"
                                name='number'
                                id='number'
                                className='w-full bg-secondaryDark py-3 px-4 rounded-lg text-gray-300 text-sm outline-none'
                                defaultValue='1234 56789123 1234'
                            />
                        </div>
                        <div className='flex gap-4'>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="expiration" className='text-xs'>Expiration Date</label>
                                <input
                                    type="text"
                                    name='expiration'
                                    id='expiration'
                                    className='w-full bg-secondaryDark py-3 px-4 rounded-lg text-gray-300 text-sm outline-none'
                                    defaultValue='02/2023'
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label htmlFor="cvv" className='text-xs'>CVV</label>
                                <input
                                    type="password"
                                    name='cvv'
                                    id='cvv'
                                    className='w-full bg-secondaryDark py-3 px-4 rounded-lg text-gray-300 text-sm outline-none'
                                    defaultValue='1234'
                                />
                            </div>

                        </div>

                    </form>
                    <div className=' w-full flex gap-4'>
                        <div className='w-1/2 flex flex-col gap-2'>
                            <label htmlFor="order" className='text-xs'>Order Type</label>

                            <ButtonTypes side='payment' />
                        </div>


                        <div className='w-1/2 flex flex-col gap-2'>
                            <label htmlFor="order" className='text-xs'>Order no.</label>
                            <input
                                type="text"
                                name='order'
                                id='order'
                                className='w-full bg-secondaryDark py-3 px-4 rounded-lg border-2 border-secondaryDark text-gray-300 text-sm outline-none'
                                defaultValue='140'
                            />
                        </div>
                    </div>
                </div>

                <div className='flex gap-2 w-full justify-self-end mb-4'>
                    <button
                        onClick={toggleModal}
                        className='bg-transparent w-1/2 border-2 border-orangeDark text-orangeDark py-3 rounded-lg  text-xs'>
                        Cancel
                    </button>
                    <button
                        className='bg-orangeDark w-1/2 py-3 rounded-lg  text-xs'>
                        Confirm Payment
                    </button>
                </div>

            </div>

        </section>
    )
}

export default Payment