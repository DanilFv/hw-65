import type {IPage} from '../../types';
import {Box, Typography} from '@mui/material';
import * as React from 'react';

interface Props {
    page: IPage;
}

const PageCard: React.FC<Props> = ({page}) => {
    return (
        <Box key={page.title} sx={{ borderRadius: '20px', p: 4, boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)' }}>
            <Typography variant="h3" gutterBottom component='h3'>
                {page.title}
            </Typography>

             <Typography variant="body1" gutterBottom component='p'>
                {page.content}
            </Typography>
        </Box>
    );
};

export default PageCard;