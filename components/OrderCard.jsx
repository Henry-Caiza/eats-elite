

import { FiTrash } from 'react-icons/fi'
import Image from 'next/image'

function OrderCard(props) {

    const { img, name, price, qor, note, id, productsCar, setProductsCar, totalPrice, setTotalPrice } = props

    const removeProductFromCard = (productId) => {
        const updatedProducts = productsCar.filter((item) => item.id !== productId);

        setTotalPrice(totalPrice - price * qor)
        setProductsCar(updatedProducts);
    };

    return (
        <div className=' flex flex-col gap-3'>
            <div className='flex items-center lg:gap-8'>
                <div className='flex items-center gap-2 col-span-4 lg:w-7/12 w-[93%]'>
                    <Image src={img} alt="" className='w-10 h-10' />
                    <div className='w-8/12 sm:w-10/12'>
                        <h4 className='truncate text-sm'>{name}</h4>
                        <p className='text-gray-500 text-xs'>${price}</p>
                    </div>
                </div>
                <div className='flex items-center justify-between justify-self-end lg:w-4/12 gap-7 lg:gap-0  text-sm'>
                    <div className='w-10 h-10 bg-secondaryDark rounded-lg flex items-center justify-center'>
                        <span className=''>{qor}</span>
                    </div>
                    <span>${(price * qor).toFixed(2)}</span>
                </div>
            </div>
            <div className='w-full flex items-center gap-7 sm:gap-6 lg:gap-7'>
                <form className='lg:w-full w-[93%]'>
                    <input
                        type="text"
                        className='w-full bg-secondaryDark py-3 px-4 rounded-lg text-gray-300 text-sm outline-none'
                        defaultValue={note}
                        placeholder='Order note.'
                    />
                </form>
                <button
                    onClick={() => removeProductFromCard(id)}
                    className=' w-10 h-10 border border-orangeDark rounded-lg flex items-center justify-center'>
                    <FiTrash className='text-orangeDark' />
                </button>
            </div>
        </div>
    )
}

export default OrderCard