import React, { useState } from 'react';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, DialogContentText, TextField } from '@mui/material'; 
import { Comment } from '@mui/icons-material'; 
import { useOrderContext } from '../context/OrderContext';

interface CommentOrderProps {
    dishIndex : number;
}

export default function CommentOrder({ dishIndex } : CommentOrderProps) {

    const [open, setOpen] = useState(false);
    const [tempNote, setTempNote] = useState(''); // Estado para a observação temporária
    const { dishes, setDishes } = useOrderContext();

    const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTempNote(event.target.value); // Atualiza a observação temporária
    };

    const handleAddNote = () => {
        setDishes(() =>
            dishes.map((dish, index) => 
                index === dishIndex ? { ...dish, note: tempNote } : dish
            )
        );

        setOpen(false);
    };

    const handleClickOpen = () => { 
        setTempNote(dishes[dishIndex]?.note || ''); // Inicializa tempNote com a observação existente
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

            <Dialog open={open} onClose={handleClose}>
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
