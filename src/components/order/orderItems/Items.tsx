import React from 'react';
import menuItems from '../../../app/data/menuItems.json';
import { Button, Select, MenuItem } from '@mui/material'
import { useState } from 'react'

export default function Items() {

    const [showSubItems, setShowSubItems] = useState(false)

    console.log(showSubItems)

    return (
        
        <div className='grid grid-cols-2 gap-4'>

            {menuItems['menu'].map(item => (

                <Button

                    sx={{padding : '20px'}}
                    variant="contained"

                    onClick={() => setShowSubItems(!showSubItems)}   

                    key={item.category}>
                        
                        {item.category}


                </Button> // Added key prop for unique identification

            ))}


        </div>
    );

}