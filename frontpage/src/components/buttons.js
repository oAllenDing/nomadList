import Button from '@mui/joy/Button';
import ToggleButtonGroup from '@mui/joy/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Container from '@mui/material/Container';


const btnArray = [
    {
        title: 'Male',
        icon: '👱 ',
        value: '1',
        value1: '4',
    },
    {
        title: 'Female',
        icon: '👩 ',
        value: '2',
        value1: '5',
    },
    {
        title: 'Other',
        icon: '🙂 ',
        value: '3',
        value1: '6',
    },

];

const btnArray1 = [
    {
        title: 'Travel buddies',
        icon: '🎒 ',
        value: '7',
    },
    {
        title: 'Friends',
        icon: '🤝 ',
        value: '8',
    },
    {
        title: 'Business partners',
        icon: '💰 ',
        value: '9',
    },
    {
        title: 'Relationship',
        icon: '❤️ ',
        value: '10',
    },
    {
        title: 'Casual dating',
        icon: '🍹 ',
        value: '11',
    },
    {
        title: 'Poly dating',
        icon: '👐 ',
        value: '12',
    },
];

const btnArray2 = [
    {
        title: 'Web Dev',
        icon: '🕸 ',
        value: '13',
    },
    {
        title: 'Software Dev',
        icon: '💻 ',
        value: '14',
    },
    {
        title: 'Mobile Dev',
        icon: '📱 ',
        value: '15',
    },
    {
        title: 'UI/UX Design',
        icon: '🎨 ',
        value: '16',
    },
    {
        title: 'Game Dev',
        icon: '👾 ',
        value: '17',
    },
    {
        title: 'VR Dev',
        icon: '😎 ',
        value: '18',
    },
    {
        title: 'Sysadmin',
        icon: '📡 ',
        value: '19',
    },
    {
        title: 'Dev Ops',
        icon: '🗃 ',
        value: '20',
    },
    {
        title: 'Startup Founder',
        icon: '📇 ',
        value: '21',
    },
    {
        title: 'Finance',
        icon: '💰 ',
        value: '22',
    },
    {
        title: 'Crypto',
        icon: '💰 ',
        value: '23',
    },
    {
        title: 'Product Manager',
        icon: '🤠 ',
        value: '24',
    },
    {
        title: 'Education',
        icon: '👨‍🏫 ',
        value: '25',
    },
    {
        title: 'Medical',
        icon: '👨‍⚕️ ',
        value: '26',
    },
    {
        title: 'Politics',
        icon: '🚩 ',
        value: '27',
    },
    {
        title: 'Creative',
        icon: '👩‍🎨 ',
        value: '28',
    },
    {
        title: 'Law',
        icon: '👩‍💼 ',
        value: '29',
    },
    {
        title: 'Journalism',
        icon: '📰 ',
        value: '30',
    },
    {
        title: 'Blogging',
        icon: '📝 ',
        value: '31',
    },
    {
        title: 'Psychologist',
        icon: '🧠 ',
        value: '32',
    },
    {
        title: 'Coach',
        icon: '👊 ',
        value: '33',
    },
    {
        title: 'Data',
        icon: '📈 ',
        value: '34',
    },
    {
        title: 'Fitness',
        icon: '💪',
        value: '35',
    },
    {
        title: 'Community',
        icon: '🤝 ',
        value: '36',
    },
    {
        title: 'Marketing',
        icon: '😁 ',
        value: '37',
    },
    {
        title: 'Sales',
        icon: '🤑 ',
        value: '38',
    },
    {
        title: 'Human resources',
        icon: '🧑‍💼 ',
        value: '39',
    },
    {
        title: 'Recruitment',
        icon: '📞 ',
        value: '40',
    },
    {
        title: 'Ecommerce',
        icon: '🛒 ',
        value: '41',
    },
    {
        title: 'SaaS',
        icon: '📊 ',
        value: '42',
    },
    {
        title: 'Support',
        icon: '🙂 ',
        value: '43',
    },
    {
        title: 'Geo',
        icon: '🗺 ',
        value: '44',
    },
    {
        title: 'Sports',
        icon: '🏃 ',
        value: '45',
    },
    {
        title: 'Logistics',
        icon: '🚚 ',
        value: '46',
    },
    {
        title: 'Architecture',
        icon: '🏡 ',
        value: '47',
    },
    {
        title: 'Model',
        icon: '📸 ',
        value: '48',
    },
    {
        title: 'Hospitality',
        icon: '👋 ',
        value: '49',
    },
    {
        title: 'Adult',
        icon: '🌶 ',
        value: '50',
    },
];

const btnArray3 = [
    {
        title: 'High School',
        icon: '🚌 ',
        value: '51',
    },
    {
        title: "Bachelor's Degree",
        icon: '📜 ',
        value: '52',
    },
    {
        title: "Master's Degree",
        icon: '🎓 ',
        value: '53',
    },
    {
        title: 'PhD',
        icon: '👩‍🏫 ',
        value: '54',
    },
];

const DescButtons = () => {
    const [value, setValue] = React.useState([]);
    return (
        <Container>
            <ToggleButtonGroup
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                spacing="0.5rem"
                sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'stretch', alignItems: 'baseline', padding: 2, '& button': { m: 1 } }}
            >
                <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', }}>
                    <Typography sx={{ margin: 2 }}>You are</Typography>
                    {btnArray.map((btn) => (
                        <Button value={btn.value}>
                            {btn.icon}
                            {btn.title}
                        </Button>
                    ))}
                </Grid>
                <Grid item sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'baseline', }}>
                    <Typography sx={{ margin: 2 }}>You like</Typography>
                    {btnArray.map((btn) => (
                        <Button value={btn.value1}>
                            {btn.icon}
                            {btn.title}
                        </Button>
                    ))}
                </Grid>
                <Grid item sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'baseline', }}>
                    <Typography sx={{ margin: 2 }}>👀 You're looking for</Typography>
                    {btnArray1.map((btn) => (
                        <Button value={btn.value}>
                            {btn.icon}
                            {btn.title}
                        </Button>
                    ))}
                </Grid>
                <Grid item sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'baseline', }}>
                    <Typography sx={{ margin: 2 }}>👩‍💻 Your work is</Typography>
                    {btnArray2.map((btn) => (
                        <Button value={btn.value}>
                            {btn.icon}
                            {btn.title}
                        </Button>
                    ))}
                </Grid>
                <Grid item sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', alignItems: 'baseline', }}>
                    <Typography sx={{ margin: 2 }}>👩‍🏫 Your education is</Typography>
                    {btnArray3.map((btn) => (
                        <Button value={btn.value}>
                            {btn.icon}
                            {btn.title}
                        </Button>
                    ))}
                </Grid>
            </ToggleButtonGroup>
        </Container>
    )
}

export default DescButtons;
