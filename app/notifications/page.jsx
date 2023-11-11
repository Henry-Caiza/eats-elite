import SideNotifications from "@/components/SideNotifications"
import { FiMoreHorizontal } from "react-icons/fi"
import { GoChevronDown } from "react-icons/go"
import { users } from '@/libs/data'

function NotificationsPage() {
    return (
        <div className='text-gray-200 w-full h-full lg:pl-28 pb-16 lg:pb-0 '>
            <h1 className='p-6 text-2xl text-gray-300 font-bold '>Notifications</h1>
            <div className='w-full px-6 flex gap-4'>
                <SideNotifications />
                <section className='w-4/5 h-[85vh] bg-dark rounded-xl p-6 '>
                    <div className="flex w-full items-center justify-between">
                        <h3 className="text-lg font-semibold">
                            New
                        </h3>
                        <div className="flex gap-4 items-center">
                            <button className="flex items-center justify-between border border-gray-500 py-2 px-4 gap-2 rounded-lg">
                                <p className="text-sm">Recent</p>
                                <GoChevronDown />
                            </button>
                            <FiMoreHorizontal className="cursor-pointer" />
                        </div>
                    </div>
                    <div className="max-w-2xl mx-auto mt-8 flex flex-col gap-8 h-[68vh] overflow-y-auto pb-1 px-4">
                        {
                            users.map((user, index) => (
                                <div className="flex items-center justify-between border-b border-gray-700 pb-6" key={user.id}>
                                    <div className="flex gap-4 items-center">
                                        <img src={user.avatar} alt="" className="w-14 h-14 rounded-full" />
                                        <div className="">
                                            <div className="flex gap-2 items-center">
                                                <span className="text-sm ">{user.customer}</span>
                                                <span className="text-sm text-gray-400">{user.email}</span>
                                            </div>
                                            <p className="text-sm text-gray-300"><span className="text-gray-400">Menu: </span>{user.menu}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <span className="text-gray-400 text-sm">1h</span>
                                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>

                </section>
            </div>
        </div>
    )
}

export default NotificationsPage