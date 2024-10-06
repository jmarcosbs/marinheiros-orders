import React from 'react'
import { List, ListItem, IconButton, ListItemText } from '@mui/material'; // Add this import
import { Comment, DeleteForever } from '@mui/icons-material'; // {{ edit_1 }}
import Counter from './Counter';

function OrderList() {

    const lista = ["Pedido 1", "Anchova ao molho de alcaparras", "Pedido 3",]

    return (
        <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper' }}>
            {lista.map((value) => (
            <ListItem
                key={value}
                sx={{backgroundColor: '#5c422710', marginBottom : '20px', borderRadius : '10px', boxShadow: '3px 3px 5px 0px #5c422730', padding : '10px' } }
                disableGutters
                secondaryAction={
                    <>
                        <IconButton aria-label="comment">
                            <Comment sx={{fontSize : '30px'}}/>
                        </IconButton>
                        <IconButton aria-label="edit">
                            <DeleteForever sx={{color: '#FF6961', fontSize : '30px'}}/>
                        </IconButton>
                    </>
                }
            >
                <div className='w-[50px] h-[100px]'>
                    <Counter containerWidth={'30px'}/>  
                </div>
                <div className='flex pl-5 items-center'>
                <ListItemText primary={<span className="text-[20px] text-[#5c4227]">{value}</span>} />    
                </div>    
            </ListItem>
            ))}
        </List>
    );
}

export default OrderList;