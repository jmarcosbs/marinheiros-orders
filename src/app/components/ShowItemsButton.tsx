'use client'

import React from 'react'; // {{ edit_1 }}
import { Button } from '@mui/material'
import { useState } from 'react'
import Items from './Items'

export default function ShowItemsButton() {

    const [showItems, setShowItems] = useState(true)

    return (
        <>
            <Button
                variant='contained'
                sx={{padding: "10px", width: "100%", backgroundColor: '#5c4227'}}
                onClick={() => setShowItems(!showItems)} // Corrigido para alternar o estado
            >
                {!showItems? 'Adicionar Item' : 'Esconder Items'}
            </Button>

            {showItems && ( // Condicional para mostrar os itens
                <Items />
            )}
        </>
    )

}