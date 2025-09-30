"use client"

import React, { FC, useState, useCallback, useMemo } from "react";
import DataTableExtensions from "react-data-table-component-extensions";
import DataTable from "react-data-table-component";
import { tableDataItems, Definecolumns, TableDataItem } from "@/shared/data/tables/datatablesdata";

const BasicDatatable: FC = () => {
    const [selectedRows, setSelectedRows] = useState<TableDataItem[]>([]);
    const [toggleCleared, setToggleCleared] = useState(false);
    const [data, setData] = useState<TableDataItem[]>(tableDataItems);

    const tableDatas = {
        columns: Definecolumns,
        data,
    };

    const contextActions = useMemo(() => {
        // Placeholder for action buttons like delete, export, etc.
        return (
            <></>
        );
    }, [selectedRows]);

    const handleRowSelected = useCallback((state: { selectedRows: TableDataItem[] }) => {
        setSelectedRows(state.selectedRows);
    }, []);

    return (
        <div className="datatable">
            <DataTableExtensions {...tableDatas}>
                <DataTable
                    // title="Basic Data Table"
                    columns={Definecolumns}
                    data={data}
                    selectableRows
                    contextActions={contextActions}
                    onSelectedRowsChange={handleRowSelected}
                    clearSelectedRows={toggleCleared}
                    pagination
                />
            </DataTableExtensions>
        </div>
    );
};

export default BasicDatatable;
