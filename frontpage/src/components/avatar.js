import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

const MainAvatar = () => {
    return (
        <Stack display="flex" justifyContent="center" alignItems="center" padding={5}>
            <Avatar sx={{ width: 170, height: 170 }}>H</Avatar>
            <Typography variant='h5' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}>@UserTag</Typography>
            <Link href="#" underline='hover' color='red'>Change your bio</Link>
        </Stack>
    );
}

export default MainAvatar;