import SideMessages from '@/components/SideMessages'
import { users } from '@/libs/data'
import { BsTelephone, BsCameraVideo, BsSend } from 'react-icons/bs'
import { RiMore2Fill } from 'react-icons/ri'
import { CiFaceSmile } from 'react-icons/ci'
import { BiMicrophone } from 'react-icons/bi'
import { AiOutlinePaperClip } from 'react-icons/ai'


function MessagesPage() {
    return (
        <div className='text-gray-200 w-full h-full lg:pl-28 pb-16 lg:pb-0 '>
            <h1 className='p-6 text-2xl text-gray-300 font-bold '>Messages</h1>
            <div className='w-full px-6 flex gap-4'>
                <SideMessages />
                <section className='w-4/6 h-[85vh] bg-dark rounded-xl p-4 '>
                    <div className='flex items-center justify-between border-b border-b-gray-700 pb-4'>
                        <div className='flex gap-4 items-center justify-center'>
                            <div className='w-12 h-12 relative'>
                                <img src={users[0].avatar} alt={users[0].customer} className='w-12 h-12 rounded-full' />
                                <div className='w-4 h-4 bg-green-400 rounded-full border-3 border-dark absolute bottom-0 right-0'>
                                </div>
                            </div>
                            <div className='flex flex-col justify-center gap-0'>
                                <p className='text-lg'>{users[0].customer}</p>
                                <p className='text-xs font-thin text-green-400'>Active</p>
                            </div>
                        </div>
                        <div className='flex gap-8 text-orangeDark'>
                            <div className='p-2 bg-orangeDark/20 rounded-full cursor-pointer'>
                                <BsTelephone className='text-lg' />
                            </div>
                            <div className='p-2 bg-orangeDark/20 rounded-full cursor-pointer'>
                                <BsCameraVideo className='text-lg' />
                            </div>
                            <div className='p-2 text-gray-200 cursor-pointer'>
                                <RiMore2Fill className='text-lg' />
                            </div>

                        </div>

                    </div>
                    <div className='w-full h-[73vh] py-4 flex flex-col justify-between '>
                        <div className='w-full flex flex-col gap-4 h-[62vh] overflow-y-auto pb-4 px-4'>
                            <div className='max-w-sm flex flex-col gap-2 p-4 rounded-xl bg-secondaryDark'>
                                <div className='flex items-center justify-between'>
                                    <p className='font-semibold'>{users[0].customer}</p>
                                    <span className='text-xs font-thin text-gray-300'>4:27pm</span>
                                </div>
                                <p className='text-xs text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolore doloremque quasi earum.</p>
                            </div>
                            <div className='max-w-sm lg:max-w-lg flex flex-col gap-2 bg-secondaryDark p-4 rounded-xl self-end'>
                                <span className='text-xs font-thin text-gray-300'>4:30pm</span>
                                <p className='text-xs text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolore doloremque quasi earum.</p>
                            </div>
                            <div className='max-w-sm flex flex-col gap-2 bg-secondaryDark p-4 rounded-xl '>
                                <div className='flex items-center justify-between'>
                                    <p className='font-semibold'>{users[0].customer}</p>
                                    <span className='text-xs font-thin text-gray-300'>4:31pm</span>
                                </div>
                                <p className='text-xs text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolore doloremque quasi earum.</p>
                            </div>
                            <div className='max-w-lg flex flex-col gap-2 bg-secondaryDark p-4 rounded-xl self-end'>
                                <span className='text-xs font-thin text-gray-300'>4:31pm</span>
                                <p className='text-xs text-gray-300'>Lorem ipsum dolor sit.</p>
                            </div>
                            <div className='max-w-sm flex flex-col gap-2 bg-secondaryDark p-4 rounded-xl self-start'>
                                <div className='flex items-center justify-between'>
                                    <p className='font-semibold'>{users[0].customer}</p>
                                    <span className='text-xs font-thin text-gray-300'>4:31pm</span>
                                </div>
                                <p className='text-xs text-gray-300'>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                        <form action="" className=''>
                            <div className='w-full relative'>
                                <div className='flex gap-4 absolute right-3 top-1/2 -translate-y-1/2 px-4 items-center '>
                                    <CiFaceSmile className='cursor-pointer' />
                                    <BiMicrophone className='cursor-pointer' />
                                    <AiOutlinePaperClip className='cursor-pointer' />
                                    <div className='rounded-full bg-orangeDark/20 p-2 cursor-pointer'>
                                        <BsSend className='text-xs text-orangeDark ' />
                                    </div>
                                </div>
                                <input type="text"
                                    className='bg-[#2D303E] w-full  p-4 pr-4 text-gray-300 rounded-lg outline-none '
                                    placeholder='Message'
                                />
                            </div>
                        </form>
                    </div>

                </section>
            </div>

        </div>
    )
}

export default MessagesPage