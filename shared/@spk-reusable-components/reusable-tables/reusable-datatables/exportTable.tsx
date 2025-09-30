"use client"
import React, { Fragment, useState } from 'react'
import DataTable from 'react-data-table-component'
import SpkButton from '../../reusable-uiElements/spk-buttons';
import { Blatantdata, columns1 } from '@/shared/data/tables/datatablesdata';

interface DataRow {
    SNO: number;
    NAME: string;
    LASTNAME: string;
    POSITION: string;
    DATE: string;
    SALARY: number;
    EMAIL: string;
}

interface ExportProps {
    onExport: (value: string | boolean) => void;
}

interface Item {
    [key: string]: string | number | boolean;
}

const ExportTable = () => {

    const Export: React.FC<ExportProps> = ({ onExport }) => (
        <SpkButton onClickfunc={(e: React.MouseEvent<HTMLButtonElement>) => onExport(e.currentTarget.value)} Buttonvariant="primary" Customclass="export-table ti-btn">
            Export
        </SpkButton>
    );

    function downloadCSV(array: Item[]): void {
        const link = document.createElement('a')
        let csv = convertArrayOfObjectsToCSV(array)

        if (csv === '') return // If no data is returned from the conversion, exit the function.

        const filename = 'export.csv'

        if (!csv.match(/^data:text\/csv/i)) {
            csv = `data:text/csv;charset=utf-8,${csv}`
        }

        link.setAttribute('href', encodeURI(csv))
        link.setAttribute('download', filename)
        link.click()
    }

    function convertArrayOfObjectsToCSV(array: Item[]): string {
        let result = ''

        const columnDelimiter = ','
        const lineDelimiter = '\n'

        if (array.length === 0) return result

        const keys = Object.keys(array[0])

        result += keys.join(columnDelimiter)
        result += lineDelimiter

        array.forEach((item) => {
            let ctr = 0
            keys.forEach((key) => {
                if (ctr > 0) result += columnDelimiter

                result += item[key]

                ctr++
            })
            result += lineDelimiter
        })

        return result
    }

   
    const [selectedRows, setSelectedRows] = useState<DataRow[]>([]); // Typing selected rows
    const [toggleCleared, setToggleCleared] = useState(false);
    const [allData, setAllData] = useState<DataRow[]>(Blatantdata); // Assuming `data` is the initial dataset
    const selectdata: DataRow[] = [];

    // Callback for handling row selection
    const handleRowSelected = React.useCallback((state: { selectedRows: DataRow[] }) => {
        setSelectedRows(state.selectedRows);
    }, []);

    // Memoizing the Export button with its action
    const actionsMemo = React.useMemo(() => <Export onExport={() => { downloadCSV(allData) }} />, [allData]);

    const contextActions = React.useMemo(() => {
        const Selectdata = () => {
            if (window.confirm(`Download:\r ${selectedRows.map((r) => r.SNO)}?`)) {
                setToggleCleared(!toggleCleared);
                selectedRows.forEach((sr) => {
                    const row = Blatantdata.find((e) => e.SNO === sr.SNO);
                    if (row) selectdata.push(row);
                });
                downloadCSV(selectdata); // Pass selected rows for download
            }
        };

        return <Export onExport={() => Selectdata()} />;
    }, [Blatantdata, selectedRows, toggleCleared]);

    // Filter function for searching the data by name
    const myfunction = (InputData: string) => {
        const filteredData = Blatantdata.filter(
            (allElement) =>
                allElement.NAME.toLowerCase().includes(InputData.toLowerCase())
        );
        setAllData(filteredData); // Update the displayed data
    };
    return (
        <Fragment>
            <span className="datatable">
                <label className="float-end">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="mb-4 form-control-sm form-control"
                        onChange={(ele) => myfunction(ele.target.value)}
                    />
                </label>

                <DataTable
                    columns={columns1}
                    data={allData}
                    actions={actionsMemo}
                    contextActions={contextActions}
                    onSelectedRowsChange={handleRowSelected}
                    clearSelectedRows={toggleCleared}
                    selectableRows
                    pagination
                />
            </span>
        </Fragment>
    )
}

export default ExportTable