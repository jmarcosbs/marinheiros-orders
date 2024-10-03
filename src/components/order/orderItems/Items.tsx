import React from 'react';
import menuItems from '../../../app/data/menuItems.json';
import { Button } from '@mui/material'
import ShowItemsButton from './ShowItemsButton';

export default function Items() {

    return (
        <div>
            <ShowItemsButton></ShowItemsButton>
        <div className='grid grid-cols-2 gap-4'>

            {menuItems['menu'].map(item => (
                <Button sx={{padding : '20px'}} variant="contained" key={item.category}>{item.category}</Button> // Added key prop for unique identification
            ))}


        </div>
        </div>
    );

}