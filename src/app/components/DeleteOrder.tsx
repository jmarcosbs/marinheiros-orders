import { DeleteForever } from '@mui/icons-material'; 
import React, { useState } from 'react';
import { IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, DialogContentText } from '@mui/material'; 
import { useOrderContext } from '../context/OrderContext';

interface DeleteOrderProps {
    dishIndex : number;
}

export default function DeleteOrder({ dishIndex } : DeleteOrderProps) {

	const { dishes, setDishes } = useOrderContext();

	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleDeleteItem = () => {
		setDishes((prevDishes) => 
			prevDishes.filter((_, index) => index !== dishIndex) // Remove o item do índice especificado
		);
	
		setOpen(false);
	};

	const handleItemName = () => {
		const dish = dishes[dishIndex]; // Acessa o prato no índice dishIndex
		return dish ? dish.name : ''; // Retorna o nome ou uma string vazia se o prato não existir
	};
	
	return (

		<>
		
				<IconButton aria-label="delete">
                    <DeleteForever onClick={handleClickOpen} sx={{ color: '#FF6961', fontSize: '30px' }} />
                </IconButton>

				<Dialog
					open={open}
					onClose={handleClose}
					aria-labelledby="alert-dialog-title"
					aria-describedby="alert-dialog-description"
				>

				<DialogTitle id="alert-dialog-title">
				{"Deseja excluir " + handleItemName() + '?'}
				</DialogTitle>

				<DialogContent>

				<DialogContentText id="alert-dialog-description">
					Confirme a exclusão do item
				</DialogContentText>

				</DialogContent>

				<DialogActions>

				<Button onClick={handleClose}>Não</Button>
				<Button onClick={handleDeleteItem} sx={{color : '#ff0000'}} autoFocus>
					Sim
				</Button>

				</DialogActions>
			</Dialog>
		
		</>

	)

}