import React, { useState, useEffect } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@mui/material'
import { useOrderContext, Dish } from '../context/OrderContext';

interface Item {
    id: number;
    name: string;
    departiment: string;
    description?: string; // Agora é opcional
}

interface CommentOrderProps {
    dishIndex : number
    openDialog: boolean
    onClose: () => void
    note?: string
}

export default function CommentOrderDialog( props : CommentOrderProps ) {

    const [tempNote, setTempNote] = useState(''); // Estado para a observação temporária
    const { dishes, setDishes } = useOrderContext();

    useEffect(() => {
        if (props.openDialog) {
            setTempNote(props.note || ''); // Reseta `tempNote` ao abrir o diálogo
        }
    }, [props.openDialog, props.note]);

    const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTempNote(event.target.value); // Atualiza a observação temporária
    };

    const handleAddNote = () => {

        if (tempNote.length > 0) {
        setDishes(() =>
            dishes.map((dish, index) => 
                index === props.dishIndex ? { ...dish, note: tempNote } : dish
            )
        )
        }

        props.onClose()
        setTempNote('')
    };


    return (

        <Dialog open={props.openDialog} onClose={props.onClose}>

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
            <Button sx={{color: '#5c422799', fontWeight: 'bold'}} onClick={props.onClose}>Sem observação</Button>
            <Button sx={{color: '#5c4227', fontWeight: 'bold'}} onClick={handleAddNote}>Adicionar</Button>
        </DialogActions>

    </Dialog>

    )
}