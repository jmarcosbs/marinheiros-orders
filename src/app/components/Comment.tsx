'use client'
import React, { useEffect } from 'react';
import { TextField } from '@mui/material'; 
import { useOrderContext } from '../context/OrderContext';


export default function CommentOrder() {

    const { note, setNote } = useOrderContext();

    const handleChange = ( functionNote : string) => {
        setNote(functionNote)
        localStorage.setItem('note', functionNote)
    }

    useEffect(() => {
        const storedNote = localStorage.getItem('note');
        if (storedNote && !note) { // Carrega apenas se `note` ainda estiver vazio
            setNote(storedNote);
        }
    }, [setNote, note]);

    return (
        <>
            <TextField
			required
			label="Observação geral"
			variant="outlined"
            value={note || ""}
            onChange={(e) => handleChange(e.target.value)}
		/>
        </>
    );
}
