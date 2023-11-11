import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip } from "@nextui-org/react";

import { columns, users } from "@/libs/data";

const statusColorMap = {
    completed: "success",
    preparing: "secondary",
    pending: "warning",
};

function TableOrder() {
    const renderCell = React.useCallback((user, columnKey) => {
        const cellValue = user[columnKey];

        switch (columnKey) {
            case "customer":
                return (
                    <User
                        avatarProps={{ radius: "full", src: user.avatar }}

                        name={cellValue}
                    >
                        {user.email}
                    </User>
                );
            case "menu":
                return (
                    <p className="text-bold text-sm capitalize">{cellValue}</p>
                );
            case "payment":
                return (
                    <p className="text-bold text-sm capitalize">${cellValue}</p>
                );
            case "status":
                return (
                    <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
                        {cellValue}
                    </Chip>
                );
            default:
                return cellValue;
        }
    }, []);

    const classNames = React.useMemo(
        () => ({
            wrapper: ["bg-transparent", "shadow-none"],
            th: ["bg-secondaryDark", "text-default-700"],
            td: [
                // changing the rows border radius
                // first
                'bg-dark',
                'text-default-600',
                "group-data-[first=true]:first:before:rounded-none",
                "group-data-[first=true]:last:before:rounded-none",
                // middle
                "group-data-[middle=true]:before:rounded-none",
                // last
                "group-data-[last=true]:first:before:rounded-none",
                "group-data-[last=true]:last:before:rounded-none",
            ],
        }),
        [],);


    return (
        <Table aria-label="Table orders" className="h-[44vh]" classNames={classNames} isHeaderSticky>
            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody items={users} className="">
                {(item) => (
                    <TableRow key={item.id}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}

export default TableOrder