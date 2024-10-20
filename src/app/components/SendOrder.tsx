import React from 'react';
import { Button } from '@mui/material'; 


export default function CommentOrder() {

    return (
        <>
            <Button aria-label="comment"
			sx={{padding: "20px", width: "100%", backgroundColor: '#5c4227', color : '#fff'}}>
				Enviar pedido
			</Button>
        </>
    );
}
