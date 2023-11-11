import CheckBoxGroup from "./CheckBoxGroup"
import RadioGroupComp from "./RadioGroupComp"


function SideNotifications() {
    return (
        <section className='w-2/6 lg:w-1/5 h-[85vh] bg-dark rounded-xl p-4'>
            <div className="flex gap-4 mb-8 ">
                <div className="w-4 h-auto bg-purple-400 rounded-sm"></div>
                <h3 className="text-lg">Filer</h3>
            </div>
            <CheckBoxGroup />
            <div className='flex gap-2 w-full my-6 border-b border-gray-700 pb-8'>
                <button
                    className='border-2 border-orangeDark text-orangeDark w-1/2 py-3 rounded-lg  text-xs'>
                    Select all
                </button>
                <button
                    className='bg-transparent w-1/2 border-2 border-orangeDark text-orangeDark py-3 rounded-lg  text-xs'>
                    Unselect all
                </button>
            </div>
            <RadioGroupComp />

        </section>
    )
}

export default SideNotifications