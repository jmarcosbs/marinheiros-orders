'use client'

import React from 'react'; // {{ edit_1 }}
import { Button } from '@mui/material'
import { useState } from 'react'
import Items from './Items'

export default function ShowItemsButton() {

    const [showItems, setShowItems] = useState(false)

    return (
        <>
            <Button
                variant='contained'
                sx={{padding: "20px", width: "100%"}}
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