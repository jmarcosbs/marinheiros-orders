import React from 'react';
import menuItems from '../../app/data/menuItems.json';
import { Button } from '@mui/material'

export default function Items() {

    return (
        <div className='grid grid-cols-2 gap-4'>
        {menuItems['menu'].map(item => (
            <Button sx={{padding : '10px'}} variant="contained" key={item.category}>{item.category}</Button> // Added key prop for unique identification
        ))}

        </div>

    );

}