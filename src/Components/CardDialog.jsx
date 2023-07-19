import React, { useState } from 'react'
import { Dialog, DialogContent, DialogContentText, DialogActions, Button, Slide, Paper, Typography, Box, Grid } from '@mui/material';
import CardsData from '../Data/CardsData';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Card = ({ open, setOpen, setValue }) => {
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                    <DialogContentText component="span" id="alert-dialog-slide-description">
                        <Grid display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap" spacing={2} gap={2} >
                            {
                                CardsData.map((card) => {
                                    return (
                                        <Paper onClick={() =>{setValue(card); handleClose();} } sx={{ width: '80px', cursor: 'pointer' }} elevation={3} >
                                            <Typography sx={{ textAlign: 'center' }} variant="h3" component="h3">
                                                {card.deger}
                                            </Typography>
                                        </Paper>
                                    )
                                })
                            }
                        </Grid>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Card
