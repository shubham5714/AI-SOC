
import React, { Fragment } from 'react';
import { Table } from 'react-bootstrap';

interface HeaderItem {
    title: string | React.ReactNode;
    headerClassname?: string;
    scope?: string
}

interface SpkTablesProps {
    children?: React.ReactNode;
    tableClass?: string;
    header?: HeaderItem[];
    showCheckbox?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    headerClass?: string;
    footchildren?: React.ReactNode;
    footerClass?: string;
    Customcheckclass?: boolean | string;
    tBodyClass?: string;
    headerContent?: React.ReactNode;
    checked?: boolean | undefined;
    inputClass?: string;

}


const SpkTables: React.FC<SpkTablesProps> = ({ children, tableClass, headerClass, header, footerClass, footchildren, headerContent, tBodyClass, checked, showCheckbox = false, Customcheckclass, onChange }) => {
    return (
        <Fragment>
            <Table className={tableClass}>
                {headerContent}
                <thead className={headerClass}>
                    <tr>
                        {showCheckbox && (
                            <th {...(Customcheckclass ? { className: Customcheckclass } : {})}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="checkboxNoLabel02"
                                    defaultValue=""
                                    checked={checked}
                                    aria-label="..."
                                    onChange={onChange}
                                />
                            </th>
                        )}
                        {header && header.map((headerItem, index) => (
                            <th key={index} scope={headerItem.scope} className={headerItem.headerClassname}>
                                {headerItem.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className={tBodyClass}>
                    {children}
                </tbody>
                <tfoot className={footerClass}>
                    {footchildren}
                </tfoot>
            </Table>
        </Fragment>
    );
}

export default SpkTables;
