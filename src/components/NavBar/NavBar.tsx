import {AppBar, Box, Button, Toolbar, Typography} from '@mui/material';
import {NavLink} from 'react-router-dom';
import {PAGES} from '../../сonstants.ts';

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1, mb: 5 }}>
            <AppBar position="static">
                <Toolbar>
                <Typography
                    variant="h6"
                    component={NavLink} to='/'
                    sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}
                >
                    Static pages
                </Typography>

                 {PAGES.map(page => (
                     <Button color='inherit' component={NavLink} to={`/pages/${page}`}>
                         {page}
                     </Button>
                 ))}

                <Button color="inherit" component={NavLink} to='/pages/admin'>Admin</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;