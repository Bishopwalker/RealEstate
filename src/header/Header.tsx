
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import {Link} from "react-router-dom";
const useStyles = makeStyles({
    button: {
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
            backgroundColor: '#333',
        },
        '&:hover, &:active': {
            cursor: 'pointer',
        },
    },
});

const Header = () => {
    const classes = useStyles();

    const navItems = [
        { name: 'My Story', url: '/about' },
        { name: 'Associates', url: '/associates' },
        { name: 'Exclusive Properties', url: '/properties/sale' },
        { name: 'Developments', url: '/developments' },
        { name: 'Media', url: '/media' },
        { name: 'Contact Us', url: '/contact' },
    ];

    return (
        <AppBar position="sticky" sx={{ backgroundColor: 'black' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                    variant="h4"
                    component="span"
                    sx={{ fontFamily: "'Great Vibes', cursive", color: 'white' }}
                >
                    <Link to="/" className={classes.button}>
                    David Fine
                    </Link>
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1, mx: 8 }}>
                    {navItems.map((item, index) => (
                        <Button
                            key={index}
                            component={Link}
                            to={item.url}
                            className={classes.button}
                        >
                            {item.name}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
