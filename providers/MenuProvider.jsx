'use client'
import { createContext, useState } from "react"

export const StoreContext = createContext()


function MyStoreProvider({ children }) {

    const [showMenu, setShowMenu] = useState(false)
    const [showOrder, setShowOrder] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [productsCar, setProductsCar] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    //const [showModal, setShowModal] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu);
        setShowOrder(false)
    }

    const toggleOrder = () => {
        setShowOrder(!showOrder);
        setShowMenu(false)
    }

    const toggleModal = () => {
        setShowModal(!showModal);
        // setShowOrder(false)
    }

    return (
        <StoreContext.Provider value={{
            toggleMenu,
            toggleOrder,
            toggleModal,
            showModal,
            showOrder,
            showMenu,
            productsCar,
            setProductsCar,
            totalPrice,
            setTotalPrice
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export default MyStoreProvider