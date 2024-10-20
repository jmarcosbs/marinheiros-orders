'use client'
import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText } from '@mui/material'; // Add this import
import Counter from './Counter';
import HandleOrderItem from './HandleOrderItem'; // Updated import to match the casing
import { useOrderContext } from '../context/OrderContext';

function OrderList() {

    const { dishes } = useOrderContext();
    const [ isMounted, setIsMounted ] = useState<boolean>(false);

    useEffect(() => {setIsMounted(true)},[]) // Apenas será true no cliente, evitando discrepância entre SSR e CSR

    if (!isMounted) {
        // Evita a renderização antes que o componente esteja montado no cliente
        return null;
      }

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {dishes.map((dish, index) => (
            <ListItem
                key={index}
                sx={{backgroundColor: '#5c422710', marginBottom : '10px', borderRadius : '10px', width: '100%', boxShadow: '3px 3px 5px 0px #5c422730', padding : '5px' } }
                disableGutters
            >
                <div className='flex w-full max-w-[100%]'>
                    <div className='flex justify-center items-center'>
                        <HandleOrderItem dishIndex={index} />
                    </div>

                    <div className='flex flex-grow pl-5 pr-5 items-center flex-grow'>
                    <ListItemText primary={<span className="text-[25px] text-[#5c4227] font-bold">{dish.amount}</span>} />    
                    </div> 

                    {dish.note == null ? (
                        <div className='flex items-center flex-grow'>
                            <ListItemText primary={<span className="text-[20px] text-[#5c4227]">{dish.name}</span>} />
                        </div>    
                    )
                    :
                        <div className="flex flex-col justify-center w-full mt-1">
                            <ListItemText 
                            primary={<span className="text-[20px] text-[#5c4227]">{dish.name}</span>} 
                            />
                            <ListItemText 
                            primary={<div className="text-[14px] text-[#5c422799] whitespace-normal">{dish.note}</div>} 
                            />
                        </div>
                
                    }

                    <div className='flex flex-grow justify-end w[40px]'>
                        <Counter containerWidth={'30px'} dishIndex={index} dishDepartiment={dish.departiment}/>  
                    </div>
                </div>
            </ListItem>
            ))}
        </List>
    );
}

export default OrderList;
