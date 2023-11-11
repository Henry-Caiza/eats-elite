import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { orderTypes } from '@/libs/data'

function ButtonTypes(props) {
    const { side } = props

    return (
        <Autocomplete
            label="Select a type"
            className="max-w-xs"
            variant='bordered'
            size='sm'
            classNames={{
                listboxWrapper: side === 'home' ? 'bg-dark rounded-lg text-xs' : 'bg-secondaryDark rounded-lg text-xs',
                listbox: "text-xs"
            }}
            inputProps={{
                classNames: {
                    inputWrapper: side === 'home' ? 'bg-dark' : '',
                },
            }}
            popoverProps={{
                classNames: {

                    content: side === 'home' ? 'bg-dark' : 'bg-secondaryDark',
                },
            }}
            listboxProps={{
                itemClasses: {
                    base: [
                        side === 'home' ? 'dark:data-[hover=true]:bg-secondaryDark' : 'dark:data-[hover=true]:bg-dark',

                    ],
                },
            }}
        >
            {orderTypes.map((orderType) => (
                <AutocompleteItem key={orderType.value} value={orderType.value} >
                    {orderType.label}
                </AutocompleteItem>
            ))}
        </Autocomplete>
    )
}

export default ButtonTypes