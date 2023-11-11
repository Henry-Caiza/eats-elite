'use client'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { HiArrowLongLeft } from 'react-icons/hi2'


import { useContext } from 'react'
import { StoreContext } from '@/providers/MenuProvider'
import OrderCard from './OrderCard'

function Car() {

    const { toggleOrder, showOrder, toggleModal, showModal, productsCar, setProductsCar, totalPrice, setTotalPrice } = useContext(StoreContext)

    return (
        <aside className={`lg:col-span-3 xl:col-span-2 fixed lg:sticky bg-dark top-0 w-full h-screen z-40 transition-all ${showOrder ? 'right-0' : '-right-full'}`}>
            <div className={`relative   pt-7 text-gray-300 px-4 ${!showModal ? 'h-[20vh] ' : '  '}`}>
                <AiOutlineCloseCircle
                    onClick={toggleOrder}
                    className='lg:hidden absolute right-4 top-4 p-3 box-content bg-secondaryDark rounded-full text-xl'
                />
                <HiArrowLongLeft
                    onClick={toggleModal}
                    className={` left-1 -top-1.5 p-3 box-content  text-2xl cursor-pointer ${showModal ? 'absolute' : 'hidden'}`}
                />
                <div className={` border-b border-gray-700 pb-6 mb-6 flex-col gap-2 ${showModal ? 'flex' : 'hidden'}`}>
                    <h2 className='text-2xl'>Confirmation</h2>
                    <p className='text-sm text-gray-400'>Orders #123456</p>
                </div>
                <h2 className={`text-2xl ${showModal ? 'hidden' : 'flex'}`}>Orders #123456</h2>
                <div className={` gap-2 mt-6 ${showModal ? 'hidden' : 'flex'}`}>
                    <button className='bg-orangeDark rounded-lg py-2 px-4 text-xs '>Dine In</button>
                    <button className='border-[0.5px] border-orangeDark/30 py-2 px-4 rounded-lg text-xs text-orangeDark hover:text-white hover:bg-orangeDark transition-colors'>To Go</button>
                    <button className='border-[0.5px] border-orangeDark/30 py-2 px-4 rounded-lg text-xs text-orangeDark hover:text-white hover:bg-orangeDark transition-colors'>Deliver</button>
                </div>
            </div>
            <div className='px-4 w-full h-[80vh] lg:h-[80vh] relative '>

                <div className={` items-center mt-6 pb-6 border-b border-gray-700 lg:gap-28 ${showModal ? 'hidden' : 'flex'}`}>
                    <h3 className='w-[93%]'>Item</h3>
                    <div className='flex justify-self-end gap-10 lg:gap-8 lg:justify-between '>
                        <h3>Qty</h3>
                        <h3>Price</h3>
                    </div>
                </div>
                <div className={`container-orders-car flex flex-col mt-8 gap-8 h-[45vh] md:h-[57vh] lg:h-[40vh] overflow-y-auto lg:overflow-y-hidden lg:hover:overflow-y-auto -mr-2 pr-2 pb-10 lg:pb-6 ${showModal ? 'lg:h-[57vh] overflow-y-auto' : ''}`}>

                    {
                        productsCar.map((product) => {
                            return (<OrderCard img={product.img} name={product.name} price={product.price} qor={product.qor} note='' id={product.id} key={product.id} productsCar={productsCar} setProductsCar={setProductsCar} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />)
                        })
                    }
                    {/* <OrderCard img={dishImg1} name='Spicy seasoned seafood noodles' price='2.29' quantity='2' note='Please, just a little bit spicy only.' />
                    <OrderCard img={dishImg2} name='Spicy seasoned seafood noodles' price='2.29' quantity='2' note='' />
                    <OrderCard img={dishImg3} name='Spicy seasoned seafood noodles' price='2.29' quantity='2' note='' />
                    <OrderCard img={dishImg3} name='Spicy seasoned seafood noodles' price='2.29' quantity='2' note='' />
                    <OrderCard img={dishImg3} name='Spicy seasoned seafood noodles' price='2.29' quantity='2' note='' /> */}

                </div>
                <div className={`w-full absolute  left-0 bottom-6 border-t bg-dark border-gray-700 flex flex-col gap-4 pt-6 ${showModal ? 'mt-36 ' : 'pb-0'}`}>
                    <div className='flex items-center justify-between mx-4'>
                        <span className='text-gray-400'>Discount</span>
                        <span>$0</span>
                    </div>
                    <div className='flex items-center justify-between mx-4'>
                        <span className='text-gray-400'>Sub total</span>
                        <span>${totalPrice.toFixed(2)}</span>
                    </div>
                    <button
                        onClick={toggleModal}
                        className={`bg-orangeDark py-3 rounded-lg mx-4 mb-4 mt-4 ${showModal ? 'hidden' : 'block'}`}>
                        Continue to Payment
                    </button>
                </div>


            </div>

        </aside>
    )
}

export default Car