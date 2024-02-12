import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';


const Exposure = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 3 }}>
            <Typography variant='h5'>
                ☢️ Your radiation exposure and 🏭 CO2 emissions from flying
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2, margin: 2, width: 900, }}>
                <Typography variant='subtitle1' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    See this chart on what's low and high radiation levels, EPA recommends keeping your additional exposure below 1,000 μSv per year.
                    Radiation can affect DNA, telomeres, and odds of cancer. People are exposed to natural radiation of 2,000-3,000 μSv a year.
                    Cancer risk is highly evident at 100,000 μSv/year where 5,000,000 μSv kills half of people within a month.
                    This calculation assumes all trips made are by plane, which is a limitation, although most trips usually are made by plane.
                    This table is private and only visible to you. To update it after changing/adding trips, please refresh the page.
                    This is not medical advice.
                </Typography>
            </Box>
        </Box>
    )
}

export default Exposure;