import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const imgLink = "https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=600,height=300,quality=75/https://nomadlist.com/assets/img/places/bangkok-thailand.jpg?1705449619";

const CityCard = () => {
    return (
        <Grid item xs={3}>
            <Grid item
                xs={13}
                sx={{
                    backgroundImage: `url(${imgLink})`,
                    height: '250px',
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Box>
                    <Typography variant="h4" color="common.white">Bangkok</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Typography variant="h6" color="common.white">Thailand</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" color="common.white" bottom={0} left={0}>C$1,932 / mo</Typography>
                    </Box>
                </Box>



            </Grid>
        </Grid>
    );
};

export default CityCard;