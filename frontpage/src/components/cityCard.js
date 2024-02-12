import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const tripInfo = [
    {
        city: 'Bangkok',
        country: 'Thailand',
        cost: 'C$1980 / mo',
        img: 'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=600,height=300,quality=75/https://nomadlist.com/assets/img/places/bangkok-thailand.jpg?1705449619',
    },
    {
        city: 'Chang Mai',
        country: 'Thailand',
        cost: 'C$1368 / mo',
        img: 'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=600,height=300,quality=75/https://nomadlist.com/assets/img/places/chiang-mai-thailand.jpg?1705449622',
    },
    {
        city: 'Kuala Lumpur',
        country: 'Malaysia',
        cost: 'C$1776 / mo',
        img: 'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=600,height=300,quality=75/https://nomadlist.com/assets/img/places/kuala-lumpur-malaysia.jpg?1705622423',
    },
    {
        city: 'Tokyo',
        country: 'Japan',
        cost: 'C$3708 / mo',
        img: 'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=600,height=300,quality=75/https://nomadlist.com/assets/img/places/tokyo-japan.jpg?1705708826',
    },
];

const tripInfo2 = [
    {
        city: 'Prague',
        country: 'Czechia',
        cost: 'C$3,738 / mo',
        img: 'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=600,height=300,quality=75/https://nomadlist.com/assets/img/places/prague-czechia.jpg?1705622429'
    },
    {
        city: 'Barcelona',
        country: 'Spain',
        cost: 'C$5,066 / mo',
        img: 'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=600,height=300,quality=75/https://nomadlist.com/assets/img/places/barcelona-spain.jpg?1705795235'
    },
    {
        city: 'Canggu, Bali',
        country: 'Indonesia',
        cost: 'C$2,590 / mo',
        img: 'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=600,height=300,quality=75/https://nomadlist.com/assets/img/places/canggu-bali-indonesia.jpg?1705449627'
    },
    {
        city: 'Istanbul',
        country: 'Turkey',
        cost: 'C$2,375 / mo',
        img: 'https://nomadlist.com/cdn-cgi/image/format=auto,fit=cover,width=600,height=300,quality=75/https://nomadlist.com/assets/img/places/istanbul-turkey.jpg?1705622450'
    },
]

const CityCard = () => {
    return (
        <Container>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 2 }}>
                <Typography variant='h5' padding={3}>
                    ✨ Recommended destinations you haven't been
                </Typography>
                <Typography variant='subtitle1'>
                    This is an algorithmic recommendation based on your trips history to find places you haven't been to yet that other people with similar travels also went and liked.
                </Typography>
            </Box>
            <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
                {tripInfo.map((info) => (
                    <Grid item xs={13} sx={{
                        backgroundImage: `url(${info.img})`,
                        height: '250px',
                        width: '250px',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 3
                    }}>
                        <Box>
                            <Typography variant='h5' color='common.white'>{info.city}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h7" color="common.white">{info.country}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" color="common.white" bottom={0} left={0}>{info.cost}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Grid item xs={3} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
                {tripInfo2.map((info) => (
                    <Grid item xs={13} sx={{
                        backgroundImage: `url(${info.img})`,
                        height: '250px',
                        width: '250px',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: 3
                    }}>
                        <Box>
                            <Typography variant='h5' color='common.white'>{info.city}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h7" color="common.white">{info.country}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="h6" color="common.white" bottom={0} left={0}>{info.cost}</Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Container >
    );
};

export default CityCard;