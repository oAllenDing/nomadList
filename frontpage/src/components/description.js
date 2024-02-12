import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


const GridContainer = (text1, text2) => {
    return (
        <Grid item margin={3}>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItem: 'center', }}>
                <Typography variant='h5'>{text1}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItem: 'center', }}>
                <Typography variant='subtitle1'>{text2}</Typography>
            </Box>
        </Grid>
    )
}

const Description = () => {
    return (
        <Container>
            <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center', alignItem: 'center', padding: 1, }}>
                {GridContainer("3", "trips")}
                {GridContainer("0%", "of the world")}
                {GridContainer("1mo ago", "signed up")}
                {GridContainer("recently", "seen")}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItem: 'center', padding: 3 }}>
                <Typography variant='body1'>The section below is only visible to you and used to show you matches in the icon in the top right of an avatar,
                    on the Matches page, and when you browse somebody's profile.
                    We only show what you're looking for (like travel buddies or a relationship)
                    to other members if you both look for the same category and are each other's liked gender.
                </Typography>
            </Box>
        </Container>
    )
}

export default Description;