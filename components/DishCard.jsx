import Image from 'next/image'


function DishCard(dish, i) {
    const data = dish.data
    return (
        <div className='bg-dark px-12 lg:px-8 2xl:px-10 pt-10 pb-8 rounded-xl flex flex-col gap-2 items-center text-gray-300 text-center relative' key={i}>
            <Image src={data.img} className='w-40 h-40 -mt-20 shadow-2xl rounded-full ' />
            <p className='text-lg'>{data.name}</p>
            <span className='font-light'>$ {data.price}</span>
            <p className='text-gray-500'>{data.quantity} Bowls available</p>
        </div>
    )
}

export default DishCard