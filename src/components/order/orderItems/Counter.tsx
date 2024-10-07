'use client'

import { ButtonGroup, Input, Button } from '@mui/material'; // Add this impor
import { Remove, Add } from '@mui/icons-material'; // {{ edit_1 }}
import { useState } from 'react';

export default function Counter({ containerWidth }: { containerWidth: string }) {

    const [count, setCount] = useState(1);
    const handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (event) => {
      setCount(Math.max(Number(event.target.value), 1));
    };
    return (
        <div className='flex flex-row items-center'>
            <Input size="small" onChange={handleChange} value={count} sx={{fontSize: '25px', width : '45px', paddingLeft : '6px', backgroundColor : '#5c422710'}}/>
            <ButtonGroup orientation="vertical" sx={{width : containerWidth }}>
              <Button
                onClick={count == 0.5 ? () => setCount((prev) => prev + 0.5) : () => setCount((prev) => prev + 1)}
                variant='contained'
                sx={{backgroundColor : '#5c422795', padding : '10px'}}
                >
                <Add fontSize="small" />
              </Button>
              <Button
                variant='contained'
                onClick={count == 1 ? () => setCount((prev) => prev - 0.5) : () => setCount((prev) => prev - 1)}
                disabled={count === 0.5}
                sx={{backgroundColor : '#5c422795', padding : '10px'}}
              >
                <Remove fontSize="small"/>
              </Button>
            </ButtonGroup>
        </div>
    );

}
