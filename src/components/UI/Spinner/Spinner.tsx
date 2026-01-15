import {Box, CircularProgress} from '@mui/material';

const Spinner = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <CircularProgress />
        </Box>
    );
};

export default Spinner;