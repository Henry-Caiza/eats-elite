
import { GoChevronDown } from 'react-icons/go'
import { RiSearchLine } from 'react-icons/ri'
import { users } from '@/libs/data'

function SideMessages() {
    return (
        <section className='w-2/6 h-[85vh] bg-dark rounded-xl'>
            <button className="flex items-center justify-between p-4 gap-4 rounded-lg">
                <p className="text-lg">Recent Messages</p>
                <GoChevronDown className='text-lg' />
            </button>
            <form action="" className='w-auto  px-4'>
                <div className='w-full relative'>
                    <RiSearchLine className='absolute left-3 top-1/2  -translate-y-1/2 text-gray-300' />
                    <input
                        type="text"
                        className='bg-[#2D303E] w-full py-2 pl-10 pr-4 text-gray-300 rounded-lg outline-none '
                        placeholder='Search'
                    />
                </div>
            </form>
            <div className='flex gap-2 w-full my-6 px-4'>
                <button
                    className='bg-orangeDark w-1/2 py-3 rounded-lg  text-xs'>
                    Chat
                </button>
                <button
                    className='bg-transparent w-1/2 border-2 border-orangeDark text-orangeDark py-3 rounded-lg  text-xs'>
                    Groups
                </button>
            </div>
            <div className='px-4 h-[55vh] flex flex-col gap-4 overflow-y-auto'>
                {
                    users.map((user) => {
                        return (
                            <div className='flex items-center justify-between border border-orangeDark/10 p-4 rounded-xl shadow-md shadow-orangeDark/10 cursor-pointer' key={user.id}>
                                <div className='flex gap-4 items-center justify-center'>
                                    <div className='w-10 h-10 relative'>
                                        <img src={user.avatar} alt={user.customer} className='w-10 h-10 rounded-full' />
                                        <div className='w-3 h-3 bg-green-400 rounded-full border-2 border-dark absolute bottom-0 right-0'>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-center gap-1'>
                                        <p>{user.customer}</p>
                                        <p className='text-xs font-thin text-gray-400'>Lorem ipsum dolor sit amet consectetur.</p>
                                    </div>
                                </div>
                                <span className='text-xs font-thin self-start text-gray-400'>
                                    4:27pm
                                </span>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default SideMessages