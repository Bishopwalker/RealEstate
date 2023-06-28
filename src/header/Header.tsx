
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
 import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Header = () => {
    const navItems = [
        { name: 'My Story', url: '/fine-properties' }, // First item replaced here
        { name: 'Associates', url: '/associates' },
        { name: 'Exclusive Properties', url: '/properties/sale' },
        { name: 'Developments', url: '/developments' },
        { name: 'Media', url: '/media' },
        { name: 'Contact Us', url: '/contact' },
    ];

    return (
        <AppBar position="static" sx={{ backgroundColor: 'black' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                    variant="h4"
                    component="span"
                    sx={{ fontFamily: "'Great Vibes', cursive", color: 'white' }}
                >
                    David Fine
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1, mx: 8 }}>
                    {navItems.map((item, index) => (
                        <Button key={index} component={Link} to={item.url} sx={{ color: 'white' }}>
                            {item.name}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );

}








        export default Header;
