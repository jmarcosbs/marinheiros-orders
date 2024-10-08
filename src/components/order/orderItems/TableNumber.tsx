'use client'
import '@/app/globals.css';
import { useEffect, useState } from 'react';
import { TextField, ToggleButton } from "@mui/material";
import { useOrderContext } from '../../../app/context/OrderContext';

export default function TableNumber() {
    const { tableNumber, setTableNumber } = useOrderContext();
    const [isOut, setIsOut] = useState<string>("")

    const handleTableNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTableNumber = event.target.value
        setTableNumber(isOut + newTableNumber)
    };

    useEffect(() => {
        isOut? setIsOut('R') : setIsOut('')
    }, [isOut]); 

    console.log(tableNumber);

    return (
        <div className="flex items-center justify-center"> 
            <TextField
                id="outlined-basic"
                label="Mesa"
                variant="outlined"
                type="number"
                onChange={handleTableNumberChange}
                sx={{ width: '100px' }}
            />
            <ToggleButton
                value="check"
                selected={isOut}
                onChange={() => setIsOut(!isOut)}
                sx={{ height: "56px" }}
            >
                Rua
            </ToggleButton>
        </div>
    );
}
