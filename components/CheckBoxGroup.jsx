import { CheckboxGroup, Checkbox } from "@nextui-org/react";

function CheckBoxGroup() {
    return (
        <CheckboxGroup
            defaultValue={["sales"]}
        >
            <Checkbox value="sales" className={`max-w-full pl-4 justify-between flex-row-reverse`}>Sales</Checkbox>
            <Checkbox value="canceled" className="max-w-full  pl-4 justify-between flex-row-reverse">Canceled</Checkbox>
            <Checkbox value="message" className="max-w-full  pl-4 justify-between flex-row-reverse">Message</Checkbox>
            <Checkbox value="review" className="max-w-full  pl-4 justify-between flex-row-reverse">Review</Checkbox>
            <Checkbox value="purchases" className="max-w-full  pl-4 justify-between flex-row-reverse">Purchases</Checkbox>
        </CheckboxGroup>
    )
}

export default CheckBoxGroup