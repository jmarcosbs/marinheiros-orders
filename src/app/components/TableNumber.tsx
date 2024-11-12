'use client';
import '@/app/globals.css';
import { TextField, ToggleButton } from "@mui/material";
import Waiter from '@/app/components/Waiter';
import { useState, useEffect } from 'react';
import { useOrderContext } from '../context/OrderContext';

export default function TableNumber() {
    const { setTableNumber, isOutside, setIsOutside } = useOrderContext();
    const [value, setValue] = useState<string | null>('');
    const [isLoaded, setIsLoaded] = useState(false); // Novo estado para verificar carregamento

    useEffect(() => {
        // Acessa o localStorage apenas no cliente
        const storagedTableNumber = localStorage.getItem('tableNumber');
        if (storagedTableNumber) {
            setValue(storagedTableNumber);
        }

        // Busca o valor inicial de isOutside do localStorage e configura o estado
        const storagedIsOutside = localStorage.getItem('isOutside');
        const isOutsideToBoolean = storagedIsOutside === 'true';
        setIsOutside(isOutsideToBoolean);
        setIsLoaded(true); // Define como carregado após o valor ser definido
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('isOutside', String(isOutside));
        }
    }, [isOutside, isLoaded]);

    const handleTableNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTableNumber = event.target.value;
        setValue(newTableNumber);
        setTableNumber(parseInt(newTableNumber));
        localStorage.setItem('tableNumber', newTableNumber);
    };

    if (!isLoaded) {
        return null; // Evita renderizar até estar carregado
    }

    return (
        <div className="flex items-center justify-between">
            <Waiter />
            <div>
                <TextField
                    id="outlined-basic"
                    label="Mesa"
                    variant="outlined"
                    type="number"
                    value={value}
                    onChange={handleTableNumberChange}
                    sx={{ width: '100px', '& .MuiInputLabel-root.Mui-focused': { color: '#5c4227' } }}
                />
                <ToggleButton
                    value="check"
                    selected={isOutside}
                    onClick={() => setIsOutside(!isOutside)}
                    sx={{
                        height: "56px",
                        '&.Mui-selected': {
                            color: 'white',
                            backgroundColor: '#5c4227',
                            '&:hover': { backgroundColor: '#5c4227' },
                        },
                        fontWeight: 'bold',
                        '&:not(.Mui-selected)': {
                            color: '#5c4227',
                            backgroundColor: '#ebe2d8',
                            '&:hover': { backgroundColor: '#ebe2d8' },
                        }
                    }}
                >
                    Rua
                </ToggleButton>
            </div>
        </div>
    );
}