'use client'
import '@/app/globals.css';
import { TextField } from "@mui/material";
import { useState, useEffect } from 'react';
import { useOrderContext } from '../context/OrderContext';

export default function TableNumber() {
    const { setWaiter } = useOrderContext();
    const [value, setValue] = useState<string>('');

    useEffect(() => {
        // Acessa o localStorage apenas no cliente
        const storaged = localStorage.getItem('waiter');
        if (storaged) {
            setValue(storaged);
        }
    }, []);

    const handleWaiterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newWaiter = event.target.value;
        setValue(newWaiter);
        setWaiter(newWaiter);
        localStorage.setItem('waiter', newWaiter);
    };

    return (
        <TextField
            id="outlined-basic"
            label="Atendente"
            variant="outlined"
            value={value}
            type="text"
            onChange={handleWaiterChange}
            sx={{ width: '150px', '& .MuiInputLabel-root.Mui-focused': { color: '#5c4227' } }}
        />
    );
}
