import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/material";


const boxInfo = [
    {
        heading: 'Last 183 Days',
    },
    {
        heading: 'Last 365 Days'
    },
    {
        heading: '2024'
    },

];



const ResidencyCalendar = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 3 }}>
            <Typography variant='h5'>
                🗓 Legal residence calendar
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2, margin: 2, width: 900, }}>
                <Typography variant='subtitle1' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    This table shows how many days you've spent each year in different countries.
                    Most governments use the 183-days physical presence test to judge if you're a legal (and taxable) resident.
                    Generally, if you are out of a country for over 183 days,
                    deregistered (usually from your city council)
                    and do not have direct ties to it (assets like companies, real estate, bank accounts, but sometimes also social ties are weighed),
                    you're not considered a resident.
                    Some countries use rolling 183 day rules,
                    that is if you're in a country over 183 days in any 365-day period you're a resident.
                    Other countries use their fiscal year to measure presence (e.g. UK's tax year starts April 6, not January 1).
                    This is not legal advice and be sure to consult a lawyer and accountant to confirm your individual situation.
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 1, margin: 1, width: 900, }}>
                <Typography variant='subtitle1' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    This table is private and only visible to you. To update it after changing/adding trips, please refresh the page.
                    We will send you an alert 30 days before you reach 183 days in one place in the last 12 months!
                </Typography>
            </Box>
            <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', padding: 4 }}>
                {boxInfo.map((info) => (
                    <Container>
                        <Grid item xs={3} sx={{
                            border: 1,
                            height: '100px',
                            width: '150px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Typography>{info.heading}</Typography>
                        </Grid>
                        {/* {boxInfo2.map((info) => (
                            <Grid></Grid>
                        ))} */}
                    </Container>

                ))}
            </Container>
        </Box>
    )
}

export default ResidencyCalendar;