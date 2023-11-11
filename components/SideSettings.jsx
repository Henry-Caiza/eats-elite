
import { AiOutlineHeart } from 'react-icons/ai'
import { HiOutlineBuildingStorefront } from 'react-icons/hi2'
import { PiBellSimpleLight } from 'react-icons/pi'
import { LuBadgePercent } from 'react-icons/lu'
import { BiLock } from 'react-icons/bi'
import { ImNotification } from 'react-icons/im'

function SideSettings() {
    return (

        <section className='w-1/5 h-[85vh] bg-dark rounded-xl'>
            <ul className='w-full'>
                <li className='flex gap-2 p-3 xl:p-6 group hover:text-orangeDark hover:bg-orangeDark/30 relative cursor-pointer transition-colors rounded-t-xl'>
                    <AiOutlineHeart className='self-start w-5 h-5 text-gray-400 pt-[2px] group-hover:text-orangeDark transition-colors' />
                    <div className=''>
                        <h4 className='text-sm font-semibold'>Appareance</h4>
                        <p className='text-xs text-gray-400'>Dark an Light mode, Font size</p>
                    </div>
                    <span className={`w-[3px] inline-block rounded-full bg-orangeDark absolute right-0 bottom-[30%] transition-[height] ease duration-300 group-hover:h-2/5 h-0'} `}></span>
                </li>
                <li className='flex gap-2  p-3 xl:p-6 group hover:text-orangeDark hover:bg-orangeDark/30 relative cursor-pointer transition-colors'>
                    <HiOutlineBuildingStorefront className='self-start w-5 h-5 text-gray-400 pt-[2px] group-hover:text-orangeDark transition-colors' />
                    <div>
                        <h4 className='text-sm font-semibold'>Your Restaurant</h4>
                        <p className='text-xs text-gray-400'>Dark an Light mode, Font size</p>
                    </div>
                    <span className={`w-[3px] inline-block rounded-full bg-orangeDark absolute right-0 bottom-[30%] transition-[height] ease duration-300 group-hover:h-2/5 h-0'} `}></span>
                </li>
                <li className='flex gap-2 items-center p-3 xl:p-6 bg-orangeDark/30 relative cursor-pointer transition-colors'>
                    <LuBadgePercent className='self-start w-5 h-5 text-orangeDark pt-[2px]' />
                    <div>
                        <h4 className='text-sm font-semibold text-orangeDark'>Products Management</h4>
                        <p className='text-xs text-gray-400'>Manage your products, pricing, etc</p>
                    </div>
                    <span className={`w-[3px] inline-block rounded-full bg-orangeDark absolute right-0 bottom-[30%] group-hover:h-2/5 transition-[height] ease duration-300 h-2/5 `}></span>
                </li>
                <li className='flex gap-2 items-center p-3 xl:p-6 group hover:text-orangeDark hover:bg-orangeDark/30 relative cursor-pointer transition-colors'>
                    <PiBellSimpleLight className='self-start w-5 h-5 text-gray-400 pt-[2px] group-hover:text-orangeDark transition-colors' />
                    <div>
                        <h4 className='text-sm font-semibold'>Notifications</h4>
                        <p className='text-xs text-gray-400'>Customize your notifications</p>
                    </div>
                    <span className={`w-[3px] inline-block rounded-full bg-orangeDark absolute right-0 bottom-[30%] transition-[height] ease duration-300 group-hover:h-2/5 h-0'} `}></span>
                </li>
                <li className='flex gap-2 items-center p-3 xl:p-6 group hover:text-orangeDark hover:bg-orangeDark/30 relative cursor-pointer transition-colors'>
                    <BiLock className='self-start w-5 h-5 text-gray-400 pt-[2px] group-hover:text-orangeDark transition-colors' />
                    <div>
                        <h4 className='text-sm font-semibold'>Security</h4>
                        <p className='text-xs text-gray-400'>Configure Password, PIN, etc</p>
                    </div>
                    <span className={`w-[3px] inline-block rounded-full bg-orangeDark absolute right-0 bottom-[30%] transition-[height] ease duration-300 group-hover:h-2/5 h-0'} `}></span>
                </li>
                <li className='flex gap-2 items-center p-3 xl:p-6 group hover:text-orangeDark hover:bg-orangeDark/30 relative cursor-pointer transition-colors'>
                    <ImNotification className='self-start w-5 h-5 text-gray-400 pt-[2px] group-hover:text-orangeDark transition-colors' />
                    <div>
                        <h4 className='text-sm font-semibold'>About Us</h4>
                        <p className='text-xs text-gray-400'>Find out more about Posly</p>
                    </div>
                    <span className={`w-[3px] inline-block rounded-full bg-orangeDark absolute right-0 bottom-[30%] transition-[height] ease duration-300 group-hover:h-2/5 h-0'} `}></span>
                </li>
            </ul>
        </section>

    )
}

export default SideSettings