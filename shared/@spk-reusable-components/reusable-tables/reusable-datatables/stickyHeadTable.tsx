"use client"
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import Table from '@mui/material/Table';
import { columns, rows } from '@/shared/data/tables/datatablesdata';

const StickyHeadTable = () => {

    const [sticky, setSticky] = useState({
        page: 0,
        rowsPerPage: 10
    });

    const handleChangePage = (_event: unknown, newPage: number) => {
        setSticky(prevState => ({
            ...prevState,
            page: newPage
        }));
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSticky(prevState => ({
            ...prevState,
            rowsPerPage: +event.target.value,
            page: 0
        }));
    };
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader={true} aria-label="sticky table" className="table-bordered sticky-header-table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell className="!border-b !border-defaultborder"
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(sticky.page * sticky.rowsPerPage, sticky.page * sticky.rowsPerPage + sticky.rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align} className="!border-b !border-defaultborder">
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={sticky.rowsPerPage}
                page={sticky.page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    )
}

export default StickyHeadTable