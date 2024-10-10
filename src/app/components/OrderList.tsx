'use client'
import * as React from 'react';
import { List, ListItem, ListItemText } from '@mui/material'; // Add this import
import Counter from './Counter';
import HandleOrderItem from './HandleOrderItem'; // Updated import to match the casing
import { useOrderContext } from '../context/OrderContext';

function OrderList() {

    const { dishes } = useOrderContext();

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {dishes.map((dish, index) => (
            <ListItem
                key={index}
                sx={{backgroundColor: '#5c422710', marginBottom : '10px', borderRadius : '10px', width: '100%', boxShadow: '3px 3px 5px 0px #5c422730', padding : '7px' } }
                disableGutters
            >
                <div className='flex justify-between w-full'>
                    <div className=''>
                        <HandleOrderItem dishIndex={index} />
                    </div>

                    <div className='flex pl-5 items-center'>
                    <ListItemText primary={<span className="text-[25px] text-[#5c4227] font-bold">{dish.amount}</span>} />    
                    </div> 

                    <div className='flex pl-5 items-center w-full'>
                    <ListItemText primary={<span className="text-[20px] text-[#5c4227]">{dish.name}</span>} />    
                    </div>    

                    <div className='flex justify-end'>
                        <Counter containerWidth={'30px'} dishIndex={index} dishDepartiment={dish.departiment}/>  
                    </div>
                </div>
            </ListItem>
            ))}
        </List>
    );
}

export default OrderList;
