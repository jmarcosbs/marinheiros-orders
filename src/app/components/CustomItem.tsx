import React, {useState} from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, DialogContentText, TextField } from '@mui/material'; 
import { ListItemText, ListItemButton} from "@mui/material";

export default function CustomItem() {

    const [open, setOpen] = useState(false);

	const handleClickOpen = () => { 
        setOpen(true);
    }; 

    const handleClose = () => { 
        setOpen(false);
    }; 

	return (

		<div className="ml-0 mt-2">
			<ListItemButton onClick={handleClickOpen} sx={{ backgroundColor: '#7d654b', color: '#fff', borderRadius: '5px', boxShadow: '3px 3px 5px 0px #5c422730', '&:hover': { backgroundColor: '#5c4227' }}} ><ListItemText primary="📝 Personalizado"/></ListItemButton>

		<Dialog open={open} onClose={handleClose}>
		<DialogTitle>Pedido personalizado</DialogTitle>
		<DialogContent>
			<DialogContentText>
				Adicione um pedido personalizado
			</DialogContentText>
			<TextField
				autoFocus
				required
				margin="dense"
				id="note"
				name="note"
				label="Nome do pedido"
				type="text"
				fullWidth
				variant="standard"
			/>
			<TextField
				autoFocus
				margin="dense"
				id="note"
				name="note"
				label="Observação"
				type="text"
				fullWidth
				variant="standard"
			/>
		</DialogContent>
		<DialogActions>
			<Button sx={{color: '#5c422799', fontWeight: 'bold'}} onClick={handleClose}>Cancelar</Button>
			<Button sx={{color: '#5c4227', fontWeight: 'bold'}}>Adicionar</Button>
		</DialogActions>
		</Dialog>

		</div>


	)


}