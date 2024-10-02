'use client'
import '@/app/globals.css';
import { useState } from 'react';

import { TextField, ToggleButton } from "@mui/material";

export default function TableNumber() {
    const [selected, setSelected] = useState(false);

    return (
        <div className="flex items-center justify-center"> 
         <TextField
            id="outlined-basic"
            label="Mesa"
            variant="outlined"
            sx={{ width: '100px' }}
        />
        <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
                setSelected(!selected);
            }}
            sx={{height : "56px"}}
        >
            Rua
        </ToggleButton>
        </div>
    );
}