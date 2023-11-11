'use client'

import { StoreContext } from "@/providers/MenuProvider"
import { useContext } from "react"
import Car from "./Car";
import { NextUIProvider } from "@nextui-org/react";
import Payment from "./Payment";

function ModalPayment() {

    const { showModal } = useContext(StoreContext)

    return (
        <NextUIProvider>
            <dialog className={`${!showModal ? 'hidden' : 'fixed'}  w-full h-full bg-black/50 z-50 text-white lg:pl-28 grid grid-cols-1 lg:grid-cols-8 pb-16 lg:pb-0 `}>
                <div className="lg:col-start-3 lg:col-end-9 xl:col-start-4 xl:col-end-9 flex">
                    <Car />
                    <div className="w-1 h-full bg-gray-700"></div>
                    <Payment />
                </div>

            </dialog>
        </NextUIProvider>

    )
}

export default ModalPayment