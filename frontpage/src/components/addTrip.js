import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const ariaLabel = { 'aria-label': 'description' };

const AddTrip = () => {
    return (
        <Box
            component='form'
            autoComplete='off'
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 1,
                '& button': { m: 1 },
            }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker slotProps={{ textField: { size: 'small' } }} />
                <DatePicker slotProps={{ textField: { size: 'small' } }} />
            </LocalizationProvider>
            <Input
                placeholder="Type a city..."
                inputProps={ariaLabel}
                sx={{ margin: 3 }}
            />
            <Button variant='contained' size='medium' color='error'>Add Trip</Button>
        </Box>
    )
}

export default AddTrip;