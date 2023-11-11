'use client'
import DishTabs from "@/components/DishTabs"
import SideSettings from "@/components/SideSettings"
import { LuSettings2 } from 'react-icons/lu'
import { IoAdd } from 'react-icons/io5'



import dish1 from '@/public/assets/dishes/3.png'
import dish2 from '@/public/assets/dishes/5.png'
import dish3 from '@/public/assets/dishes/7.png'


import ProductCardSettings from "@/components/ProductCardSettings"
import ModalAddProduct from "@/components/ModalAddProduct"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";

function SettingsPage() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div className='text-gray-200 w-full h-full lg:pl-28 pb-16 lg:pb-0 '>
            <h1 className='p-6 text-2xl text-gray-300 font-bold '>Settings</h1>
            <div className='w-full px-6 flex gap-4'>
                <SideSettings />
                <section className='w-4/5 h-[85vh] bg-dark rounded-xl px-6 '>
                    <div className="flex items-center justify-between py-6">
                        <h2 className="text-lg font-semibold">Products Management</h2>
                        <button className="flex items-center justify-between border border-gray-500 py-2 px-4 gap-2 rounded-lg">
                            <LuSettings2 />
                            <p className="text-sm">Manage Categories</p>
                        </button>
                    </div>
                    <DishTabs />
                    <div className="container-products grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-4 h-[52vh] overflow-y-auto ">
                        <div className="w-[12rem] h-72 border-2 border-dashed border-orangeDark rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-orangeDark/20"
                            onClick={onOpen}
                        >
                            <IoAdd className='text-orangeDark w-16 h-16 ' />
                            <span className="text-orangeDark">Add new dish</span>
                        </div>

                        <ProductCardSettings img={dish1} name='Spicy seasoned seafood noodles' price='2.29' quantity='20' category='hot' />
                        <ProductCardSettings img={dish2} name='Spicy seasoned seafood noodles' price='4.99' quantity='15' category='hot' />
                        <ProductCardSettings img={dish3} name='Spicy seasoned seafood noodles' price='5.33' quantity='35' category='hot' />
                        <ProductCardSettings img={dish1} name='Spicy seasoned seafood noodles' price='2.29' quantity='20' category='hot' />
                        <ProductCardSettings img={dish2} name='Spicy seasoned seafood noodles' price='4.99' quantity='15' category='hot' />
                        <ProductCardSettings img={dish3} name='Spicy seasoned seafood noodles' price='5.33' quantity='35' category='hot' />
                        <Modal
                            isOpen={isOpen}
                            onOpenChange={onOpenChange}
                            placement="top-center"
                            size="2xl"
                        >
                            <ModalContent>
                                {(onClose) => (
                                    <>
                                        <ModalHeader className="flex flex-col gap-1 text-center">Add a Dish</ModalHeader>
                                        <ModalBody>
                                            <Input
                                                autoFocus
                                                label="Image"
                                                type="file"
                                                placeholder="Choose an image"
                                                variant="bordered"
                                                classNames={{
                                                    input: 'file:border-0 file:bg-transparent file:text-xs file:font-medium'
                                                }}
                                            //   className="file:border-0 file:bg-transparent file:text-sm file:font-medium"
                                            />
                                            <Input
                                                label="Dish Name"
                                                type="text"
                                                variant="bordered"
                                            />
                                            <div className="flex gap-4">
                                                <Input
                                                    label="Dish Price"
                                                    type="number"
                                                    variant="bordered"
                                                />
                                                <Input
                                                    label="Dish Quantity"
                                                    type="number"
                                                    variant="bordered"
                                                />
                                            </div>


                                        </ModalBody>
                                        <ModalFooter>
                                            <Button color="danger" variant="flat" onPress={onClose}>
                                                Cancel
                                            </Button>
                                            <Button color="success" onPress={onClose}>
                                                Create
                                            </Button>
                                        </ModalFooter>
                                    </>
                                )}
                            </ModalContent>
                        </Modal>
                    </div>
                    <div className='flex gap-2 w-1/2 lg:w-1/3 my-8 '>
                        <button
                            className='bg-transparent w-1/2 border-2 border-orangeDark text-orangeDark py-3 rounded-lg  text-xs'>
                            Discard Changes
                        </button>
                        <button
                            className='bg-orangeDark w-1/2 py-3 rounded-lg  text-xs'>
                            Save Changes
                        </button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SettingsPage