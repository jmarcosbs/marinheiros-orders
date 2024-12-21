import React, { useState, useEffect } from 'react'
import { Dialog, List, ListItem, ListItemButton, ListItemText, DialogTitle } from '@mui/material'
import { useOrderContext, Dish } from '../context/OrderContext';
import CommentOrderDialog from './CommentOrderDialog';

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

    const { dishes, setDishes } = useOrderContext()
    const [openComment, setOpenComment] = useState(false) // Controle do estado do diálogo
    const [ dishIndex, setDishIndex ] = useState<number>(0)
    const [selectedSubItem, setSelectedSubItem] = useState<Item | null>(null);


    const handleClickSubItem = (item : Item) => {
        const newDish: Dish = {
            id: item.id,
            name: item.name,
            departiment: item.departiment, // Usa o departamento passado como argumento
            amount: 1, // Substitua pelo valor correto
            note: null // Inicializa note como null
        }
    
        setDishes((prevDishes: Dish[]) => { // Specify the type of prevDishes
            let updatedDishes = [...prevDishes, newDish];
            updatedDishes = updatedDishes.sort((a, b) => (a.departiment === 'cozinha' ? -1 : 1));

            // Encontre o índice do newDish após a ordenação
            const newDishIndex = updatedDishes.findIndex(dish => dish.id === newDish.id && dish.departiment === newDish.departiment);
            
            // Atualize o estado dishIndex para o índice do novo prato
            setDishIndex(newDishIndex);

            return updatedDishes;
        });

        setOpenComment(true)
        props.onClose()
    }

    const handleCloseComment = () => {

        setOpenComment(false)

    }

    return (
        <>
            <Dialog open={props.openDialog} onClose={props.onClose}>
                <List>
                {props.menuSubItems.map((subItem: Item, index) => (
                    <ListItem key={index} disablePadding>
                    <ListItemButton onClick={() => handleClickSubItem(subItem)}>
                        <ListItemText primary={subItem.name} />
                    </ListItemButton>
                    </ListItem>
                ))}
                </List>
            </Dialog>

            <CommentOrderDialog dishIndex={dishIndex} openDialog={openComment} onClose={handleCloseComment}/>
        </>
    )
}