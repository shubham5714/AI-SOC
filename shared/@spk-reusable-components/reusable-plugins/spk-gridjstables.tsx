import { Grid } from "gridjs-react";
import { PaginationConfig } from "gridjs/dist/src/view/plugin/pagination.js";
import React, { Fragment } from 'react';


interface SpkGridjstablesProps {
    Data?: (() => (string | number | boolean | Plugin | null)[][]) | (string | number | boolean | Plugin | null)[][];
    Columns: Array<any>;
    Search?: boolean;
     Pagination?: boolean | PaginationConfig;
    limit?: number;
    Sort?: boolean;
    reSizable?: boolean;
    Height?: string;
    width?: string;
    fixedHeader?: boolean;
}

const SpkGridjstables: React.FC<SpkGridjstablesProps> = ({ Data, Columns, Search, Pagination, Sort, reSizable, Height, width, fixedHeader }) => {

    return (
        <Fragment>
            <Grid data={Data} columns={Columns} search={Search} pagination={Pagination} sort={Sort} resizable={reSizable} fixedHeader={fixedHeader} height={Height} width={width} />
        </Fragment>
    );
}

export default SpkGridjstables;
