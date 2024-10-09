'use client'
import '@/app/globals.css';
import { TextField, ToggleButton } from "@mui/material";
import { useOrderContext } from '../context/OrderContext';

export default function TableNumber() {
    const { tableNumber, setTableNumber } = useOrderContext();
    const { isOutside, setIsOutside } = useOrderContext();

    const handleTableNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTableNumber = parseInt(event.target.value)
        setTableNumber(newTableNumber)
    };


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
                selected={isOutside}
                onChange={() => setIsOutside(!isOutside)}
                sx={{ height: "56px" }}
            >
                Rua
            </ToggleButton>
        </div>
    );
}
