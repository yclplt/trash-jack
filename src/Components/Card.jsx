import React, { useState } from 'react'
import { Box, Paper, IconButton, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CardDialog from './CardDialog';

const Card = () => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);

    return (
        <>
            <Box onClick={() => setOpen(!open)} component="span" sx={{ width: '300px', height: "200px", display: 'flex', border: '1px dashed grey' }}>
                <IconButton sx={{ width: '100%', height: '100%', borderRadius: '0px' }} aria-label="add-card">
                    {!value ? <AddIcon /> : 
                    <Typography sx={{ textAlign: 'center', color: '#efefef' }} variant="h1" component="h1">
                        {value.deger}
                    </Typography>}
                </IconButton>
            </Box>
            <CardDialog open={open} setOpen={setOpen} setValue={setValue} />
        </>
    )
}

export default Card
