
 import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const Header = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f5f5f5',
                p: 4
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    p: 2,
                    mb: 2,
                    backgroundColor: '#ffffff',
                    boxShadow: 3
                }}
            >
                <Typography variant="h6" component="div">
                    David Fine
                </Typography>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Avatar alt="Keller Williams" src="path/to/logo.png" />
                    <Typography variant="h6" component="div" sx={{ml: 1}}>
                        Keller Williams
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Header;

