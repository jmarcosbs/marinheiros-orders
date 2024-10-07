import React from 'react';
import { IconButton } from '@mui/material'; // {{ edit_1 }}
import { Comment, DeleteForever } from '@mui/icons-material'; // {{ edit_1 }}


export default function HandleOrderItem() {

    return (
        <>
            <div className='flex items-center flex-col'>
                <IconButton aria-label="comment">
                    <Comment sx={{ fontSize: '30px' }} />
                </IconButton>
                <IconButton aria-label="delete">
                    <DeleteForever sx={{ color: '#FF6961', fontSize: '30px' }} />
                </IconButton>
            </div>
        </>
    );
}