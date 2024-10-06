'use client'

import { ButtonGroup, Input, Button, Box } from '@mui/material'; // Add this impor
import { Remove, Add } from '@mui/icons-material'; // {{ edit_1 }}
import { useState } from 'react';

export default function Counter({ containerWidth }: { containerWidth: string }) {

    const [count, setCount] = useState(1);
    const handleChange = (event) => {
      setCount(Math.max(Number(event.target.value), 1));
    };
    return (

        <ButtonGroup orientation="vertical" sx={{width : containerWidth, minWidth : '47px'}}>
          <Button
            variant='contained'
            onClick={count == 1 ? () => setCount((prev) => prev - 0.5) : () => setCount((prev) => prev - 1)}
            disabled={count === 0.5}
            sx={{backgroundColor : '#5c422760', padding : '0px', minHeight : '30px'}}
          >
            <Remove fontSize="small"/>
          </Button>
          <Input size="small" onChange={handleChange} value={count} sx={{fontSize: '25px', maxWidth : '100%', width : '80px', height : '100%', paddingLeft : '6px'}}/>
          <Button
            onClick={count == 0.5 ? () => setCount((prev) => prev + 0.5) : () => setCount((prev) => prev + 1)}
            variant='contained'
            sx={{backgroundColor : '#5c422760', padding : '0px', minHeight : '30px'}}
            >
            <Add fontSize="small" />
          </Button>
        </ButtonGroup>

    );

}
