import { RadioGroup, Radio } from "@nextui-org/react";

function RadioGroupComp() {
    return (
        <RadioGroup
            defaultValue="customers"
        >
            <Radio value="customers" className="max-w-full pl-4 justify-between flex-row-reverse">Customers</Radio>
            <Radio value="everyone" className="max-w-full pl-4 justify-between flex-row-reverse">Everyone</Radio>

        </RadioGroup>
    )
}

export default RadioGroupComp