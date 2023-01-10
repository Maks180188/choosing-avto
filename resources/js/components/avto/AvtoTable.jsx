import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

export default function AvtoTable({cars}) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>model</TableCell>
                        <TableCell align="right">class</TableCell>
                        <TableCell align="right">type</TableCell>
                        <TableCell align="right">vin</TableCell>
                        <TableCell align="right">vrm</TableCell>
                        <TableCell align="right">action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cars.map((row) => (
                        <TableRow
                            key={row.model}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {row.model}
                            </TableCell>
                            <TableCell align="right">{row.class}</TableCell>
                            <TableCell align="right">{row.type}</TableCell>
                            <TableCell align="right">{row.vin}</TableCell>
                            <TableCell align="right">{row.vrm}</TableCell>
                            <TableCell align="right">
                                <div>
                                    <Button size="small" variant="contained" color="success">Reserve</Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
