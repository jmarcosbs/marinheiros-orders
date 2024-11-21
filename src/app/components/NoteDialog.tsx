import React, { useState } from 'react'
import { Dialog, List, ListItem, ListItemButton, ListItemText, DialogTitle } from '@mui/material'
import { useOrderContext, Dish } from '../context/OrderContext';

interface Item {
    id: number;
    name: string;
    departiment: string;
    description?: string; // Agora é opcional
}

interface NoteDialogProps {

    menuSubItems: Item[]
    openDialog: boolean
    onClose: () => void

}

export default function NoteDialog( props : NoteDialogProps ) {

    const { setDishes } = useOrderContext()

    const handleClickSubItem = (item: Item, departiment: string) => {
        const newDish: Dish = {
            id: item.id,
            name: item.name,
            departiment: departiment, // Usa o departamento passado como argumento
            amount: 1, // Substitua pelo valor correto
            note: null // Inicializa note como null
        }
    
        setDishes((prevDishes: Dish[]) => { // Specify the type of prevDishes
            const updatedDishes = [...prevDishes, newDish];
            return updatedDishes; // Return the updated array
        })
    }

    return (

            <Dialog open={props.openDialog} onClose={props.onClose}>
                <List>
                {props.menuSubItems.map((subItem: Item) => (
                    <ListItem key={subItem.id} disablePadding>
                    <ListItemButton onClick={() => handleClickSubItem(subItem, subItem.departiment)}>
                        <ListItemText primary={subItem.name} />
                    </ListItemButton>
                    </ListItem>
                ))}
                </List>
            </Dialog>

    )
}