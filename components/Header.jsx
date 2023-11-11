import { RiSearchLine } from 'react-icons/ri'

function Header() {
    return (
        <header className=''>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6'>
                <div className=''>
                    <h1 className='text-2xl text-gray-300 font-bold'>Jeager Resto</h1>
                    <p className='text-gray-500'>Monday 5 Nov, 2023</p>
                </div>

                <form action="" className='w-auto md:w-80 xl:w-96'>
                    <div className='w-full relative'>
                        <RiSearchLine className='absolute left-3 top-1/2  -translate-y-1/2 text-gray-300' />
                        <input
                            type="text"
                            className='bg-[#2D303E] w-full py-2 pl-10 pr-4 text-gray-300 rounded-lg outline-none '
                            placeholder='Search'
                        />
                    </div>
                </form>
            </div>
            {/* <Dishtabs /> */}

        </header>
    )
}

export default Header