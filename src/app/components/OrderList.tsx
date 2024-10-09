import React from 'react'
import { List, ListItem, ListItemText } from '@mui/material'; // Add this import
import Counter from './Counter';
import HandleOrderItem from './HandleOrderItem'; // Updated import to match the casing

function OrderList() {

    const lista = ["Pedido 1", "Anchova ao molho de alcaparras", "Pedido 3",]

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {lista.map((value) => (
            <ListItem
                key={value}
                sx={{backgroundColor: '#5c422710', marginBottom : '10px', borderRadius : '10px', width: '100%', boxShadow: '3px 3px 5px 0px #5c422730', padding : '7px' } }
                disableGutters
            >
                <div className='flex justify-between w-full'>
                    <div className=''>
                        <HandleOrderItem />
                    </div>

                    <div className='flex pl-5 items-center w-full'>
                    <ListItemText primary={<span className="text-[20px] text-[#5c4227]">{value}</span>} />    
                    </div>    

                    <div className='flex justify-end'>
                        <Counter containerWidth={'30px'}/>  
                    </div>
                </div>
            </ListItem>
            ))}
        </List>
    );
}

export default OrderList;
