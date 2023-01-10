import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {Box} from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export default function AvtoTable({cars, startDate, endDate, updateList}) {
    const [open, setOpen] = useState(false);
    const [carId, setCarId] = useState(null);

    const handleClickOpen = (event) => {
        setOpen(true)
        setCarId(event.target.value)
    };

    const handleClose = () => {
        setOpen(false)
    };

    const reserveCar = () => {
        axios.post('/reserve-car', {
            id: carId,
            startDate: startDate,
            endDate: endDate,
        }).then((res) => {
            handleClose()
            updateList()
        }).catch((err) => {
            console.log('error', err)
        })
    }
    return (
        <>
            <Box mt={2}>
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
                                            <Button onClick={handleClickOpen} value={row.id} size="small" variant="contained"
                                                    color="success">Reserve</Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Reserve this car?"}
                </DialogTitle>
                <DialogContent>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={reserveCar} autoFocus>
                        Apply
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
