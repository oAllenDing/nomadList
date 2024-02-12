import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TripDesc = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <TextField
                label='Write a public journal note to remember this trip: How was it? Who were you with? What did you do/see? (optional)'
               
                sx={{
                    width: 900, padding: 1, "& .MuiInputBase-root": {
                        height: 70
                    }
                }}
            >

            </TextField>
        </Box>
    )

}

export default TripDesc;