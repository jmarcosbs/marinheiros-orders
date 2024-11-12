import React from 'react';
import { Dialog as MuiDialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material';

interface DialogProps {
    icon?: React.ReactNode;
    text: string;
    open: boolean; // A propriedade `open` para controlar o estado de visibilidade do Dialog
    setOpen: React.Dispatch<React.SetStateAction<boolean>>; // Função para alterar o estado `open`
    title: string;
}

const Dialog = ({ icon, text, open, setOpen, title }: DialogProps) => {
    const handleClose = () => {
        setOpen(false); // Fecha o diálogo
    };

    return (
        <MuiDialog open={open} onClose={handleClose}>
            <DialogTitle>
                {icon} {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {text}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} autoFocus>
                    Fechar
                </Button>
            </DialogActions>
        </MuiDialog>
    );
};

export default Dialog;
