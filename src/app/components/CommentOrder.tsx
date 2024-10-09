'use client'

import React, { useState } from 'react';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, DialogContentText, TextField } from '@mui/material'; 
import { Comment } from '@mui/icons-material'; 

export default function CommentOrder() {

    const [open, setOpen] = useState(false); 

    const handleClickOpen = () => { 
        setOpen(true);
    }; 

    const handleClose = () => { 
        setOpen(false);
    }; 


    return (

        <>
        
            <IconButton aria-label="comment" onClick={handleClickOpen}>
                    <Comment sx={{ fontSize: '30px', color: '#5c4227' }} />
            </IconButton>

            <Dialog
                open={open}
                onClose={handleClose}
            >

            <DialogTitle>Adicionar observação</DialogTitle>

            <DialogContent>

                <DialogContentText>
                    Adicione uma observação no item.
                </DialogContentText>

                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="note"
                    name="note"
                    label="Obersvação"
                    type="text"
                    fullWidth
                    variant="standard"
                />

            </DialogContent>

            <DialogActions>

                <Button sx={{color: '#5c422799', fontWeight: 'bold'}} onClick={handleClose}>Cancelar</Button>
                <Button sx={{color: '#5c4227', fontWeight: 'bold'}} type="submit">Adicionar</Button>
                
            </DialogActions>
        </Dialog>
        
        </>

    )

}