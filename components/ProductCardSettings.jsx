import { LuPencilLine } from 'react-icons/lu'
import Image from "next/image"

function ProductCardSettings(props) {
    const { img, name, price, quantity, category } = props
    return (
        <div className="w-[12rem] h-72 border-2 border-gray-700/50 rounded-lg flex flex-col items-center justify-center">
            <div className="w-full h-[80%] flex flex-col items-center px-6 gap-2 justify-center">
                <Image src={img} alt="" className="w-28 h-28" />
                <p className="text-center text-sm">{name}</p>
                <div className="flex gap-2 text-xs text-gray-500">
                    <span>${price}</span>
                    -
                    <span>{quantity} Bowls</span>
                </div>
            </div>
            <button className="w-full h-[20%] bg-orangeDark/30 rounded-b-lg flex items-center justify-center gap-4 text-orangeDark text-sm">
                <LuPencilLine />
                <p>Edit dish</p>
            </button>
        </div>
    )
}

export default ProductCardSettings