'use client';
import '@/app/globals.css';
import { TextField, ToggleButton } from "@mui/material";
import Waiter from '@/app/components/Waiter';
import { useState, useEffect } from 'react';
import { useOrderContext } from '../context/OrderContext';

export default function TableNumber() {
    const { setTableNumber, isOutside, setIsOutside } = useOrderContext();
    const [value, setValue] = useState<string | null>('');

    useEffect(() => {
        // Acessa o localStorage apenas no cliente
        const storagedTableNumber = localStorage.getItem('tableNumber');
        if (storagedTableNumber) {
            setValue(storagedTableNumber);
        }
        const storagedIsOutside = localStorage.getItem('isOutside');
        // Converte o valor para booleano, assumindo que "true" representa `true` e qualquer outra coisa representa `false`
        const isOutsideToBoolean = storagedIsOutside === 'true';
        if (isOutsideToBoolean) {
            setIsOutside(isOutsideToBoolean);
            localStorage.setItem('isOutside', String(isOutside));
        }
    }, []);

    useEffect(() => {
         // Acessa o localStorage apenas no cliente
        localStorage.setItem('isOutside', String(isOutside));

    }, [isOutside]);

    const handleTableNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTableNumber = event.target.value;
        setValue(newTableNumber);
        setTableNumber(parseInt(newTableNumber));
        localStorage.setItem('tableNumber', newTableNumber)
    };


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
