'use client'
import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, DialogContentText, TextField } from '@mui/material'; 
import { useOrderContext } from '../context/OrderContext';


export default function CommentOrder() {

    const [open, setOpen] = useState(false);
    const [tempNote, setTempNote] = useState(''); // Estado para a observação temporária
	const { setNote } = useOrderContext();

    const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTempNote(event.target.value); // Atualiza a observação temporária
    };

    const handleAddNote = () => {
        setNote(tempNote);
        setOpen(false);
    };

    const handleClickOpen = () => { 
        setOpen(true);
    }; 

    const handleClose = () => { 
        setOpen(false);
    }; 


    return (
        <>
            <Button aria-label="comment" onClick={handleClickOpen}
			sx={{padding: "20px", width: "100%", backgroundColor: '#5c422799', color : '#fff'}}>
				Adicionar observação
			</Button>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Adicionar observação geral</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Adicione uma observação no pedido.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="note"
                        name="note"
                        label="Observação"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={tempNote} // Valor do estado temporário
                        onChange={handleNoteChange} // Atualiza o estado temporário
                    />
                </DialogContent>
                <DialogActions>
                    <Button sx={{color: '#5c422799', fontWeight: 'bold'}} onClick={handleClose}>Cancelar</Button>
                    <Button sx={{color: '#5c4227', fontWeight: 'bold'}} onClick={handleAddNote}>Adicionar</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
