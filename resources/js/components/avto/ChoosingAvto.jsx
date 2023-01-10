import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Box} from "@mui/material";
import AvtoTable from "./AvtoTable";

function ChoosingAvto () {
    const [cars, setCars] = useState([])
    const [open, setOpen] = useState(false)
    const [errors, setErrors] = useState({})
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    const getCars = () => {
        axios.post(`/get-cars`, {
            startDate: startDate,
            endDate: endDate,
        })
            .then((res) => {
                console.log('res', res.data.data)
                setCars(res.data.data);
                setOpen(false)
            }
        )
            .catch((err) => {
                console.log('error', err)
                if (err.response.status === 422) {
                    setErrors(err.response.data.errors);
                }
            }
        )
    }

    const handleOnClick = () => {
        setOpen(!open)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const acceptHandle = (event) => {
        event.preventDefault();
        getCars()

    };

    const onStartDateChange = (event) => {
        setStartDate(event.target.value);
    }

    const onEndDateChange = (event) => {
        setEndDate(event.target.value)
    }

    useEffect(() => {
        setCars(cars)
    }, [cars])

    return (
        <>
            <Stack spacing={2} direction="row">
                <Button onClick={handleOnClick} variant="contained">Choose Car</Button>
            </Stack>
            <Dialog maxWidth="xl" open={open} onClose={handleClose}>
                <Box component="form" onSubmit={acceptHandle}>
                <DialogTitle>Dates</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You need to choose a start and end date
                    </DialogContentText>
                    <DialogContentText>
                        Start date:
                    </DialogContentText>
                    <TextField
                        type="date"
                        id="outlined-basic"
                        variant="filled"
                        error={errors.startDate}
                        helperText={errors.startDate}
                        onChange={onStartDateChange}
                    />
                    <DialogContentText>
                        End date:
                    </DialogContentText>
                    <TextField
                        type="date"
                        id="outlined-basic"
                        variant="filled"
                        error={!!errors.endDate}
                        helperText={errors.endDate}
                        onChange={onEndDateChange}
                        />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button type="submit">Accept</Button>
                </DialogActions>
                </Box>
            </Dialog>
            { cars.length ? (<AvtoTable
                cars={cars}
                startDate={startDate}
                endDate={endDate}
                updateList={getCars}
            />):('')}
        </>
    );
}

export default ChoosingAvto;

if (document.getElementById('app')) {
    ReactDOM.render( <ChoosingAvto/>, document.getElementById('main'));
}

