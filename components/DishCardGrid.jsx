'use client'

import { IoAdd } from 'react-icons/io5'

import { data } from '@/libs/data'
import Image from 'next/image'
import ButtonTypes from './ButtonTypes'
import { useContext } from 'react'
import { StoreContext } from '@/providers/MenuProvider'


function DishCardGrid(pathname) {
    let pathCategory = pathname.pathname.slice(1)
    if (pathCategory === '') {
        pathCategory = 'hot'
    }

    const { productsCar, setProductsCar, totalPrice, setTotalPrice } = useContext(StoreContext)

    const addProductCard = (product) => {


        if (productsCar.find((item) => item.id === product.id)) {
            const products = productsCar.map((item) =>
                item.id === product.id ? { ...item, qor: item.qor + 1 } : item
            )

            setTotalPrice(totalPrice + product.price * product.qor)
            return setProductsCar([...products])
        }
        product.quantity - 1
        setTotalPrice(totalPrice + product.price * product.qor)
        setProductsCar([product, ...productsCar])
    }

    //console.log(productsCar);

    return (
        <div className='flex flex-col gap-20'>
            <div className='flex items-center justify-between'>
                <h2 className='text-xl text-gray-300'>Choose Dishes</h2>
                <ButtonTypes side='home' />
                {/* <button className='flex items-center gap-4 text-gray-300 bg-dark py-2 px-4 rounded-lg'>
                    <GoChevronDown /> Dine in
                </button> */}
            </div>
            <div className='px-8 lg:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-16 lg:gap-x-4 lg:gap-y-16 2xl:gap-x-6 2xl:gap-y-16'>

                {
                    data.map((dish, i) => {
                        if (dish.category === pathCategory) {
                            return (
                                <div
                                    className='bg-dark px-12 lg:px-4  xl:px-8 2xl:px-10 pt-10 pb-8 rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center relative cursor-pointer group'
                                    key={i}>
                                    <Image src={dish.img} className='w-40 h-40 -mt-20 shadow-2xl rounded-full object-cover' alt={dish.name} />
                                    <p className='text-lg h-3/5'>{dish.name}</p>
                                    <div className='flex flex-col gap-2'>
                                        <span className='font-light'>$ {dish.price}</span>
                                        <p className='text-gray-500'>{dish.quantity} Bowls available</p>
                                    </div>
                                    <div className='w-full h-full absolute bg-orangeDark/20 top-0 rounded-lg flex items-center justify-center border-2 border-dashed border-orangeDark opacity-0 group-hover:opacity-100 group-hover:transition-opacity'
                                        onClick={() => { addProductCard(dish) }}
                                    >
                                        <IoAdd className='text-white w-20 h-20 rounded-full bg-orangeDark/80 ' />
                                    </div>
                                </div>
                            )
                        }
                    })
                }

            </div>
        </div>
    )
}

export default DishCardGrid