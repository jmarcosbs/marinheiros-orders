'use client';
import React, { useState } from 'react';
import { Button, Backdrop, CircularProgress } from '@mui/material';
import Dialog from './Dialog'; // Supondo que você tenha o componente Dialog
import ErrorIcon from '@mui/icons-material/Error';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { useOrderContext } from '../context/OrderContext';

export default function SendOrderButton() {
    const { waiter, tableNumber, isOutside, dishes, getOrderAsJson } = useOrderContext();
    const [openDialog, setOpenDialog] = useState(false); // Controle de abertura do diálogo
    const [openBackdrop, setOpenBackdrop] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleSubmit = async () => {
        let errors = '';

        if (!waiter) errors += 'Erro: O nome do garçom está vazio.\n';
        if (!tableNumber) errors += 'Erro: O número da mesa está vazio.\n';
        if (isOutside === undefined) errors += 'Erro: A informação de local (fora/dentro) está ausente.\n';
        if (dishes.length === 0) errors += 'Erro: Nenhum prato foi adicionado.\n';

        if (errors) {
            setErrorMessage(errors); // Exibe a mensagem de erro
            setOpenDialog(true); // Abre o diálogo de erro
        } else {
            setOpenBackdrop(true)
            if (await sendOrder()) {
                setErrorMessage(""); // Exibe a mensagem de erro
                setOpenDialog(true)
                cleanApp()
                setOpenBackdrop(false)
            } else {
                setOpenDialog(true)
                setOpenBackdrop(false)
            }
        }
    };

    const cleanApp = () => {
        localStorage.removeItem('tableNumber'); // Remove o item em vez de definir como ""
        localStorage.removeItem('isOutside'); // Remove o item
        localStorage.removeItem('dishes'); // Remove o item
        localStorage.removeItem('note'); // Remove o item
        setTimeout(() => (window.location.reload()), 2000)
        
    };

    const sendOrder = async () => {
        const orderData = getOrderAsJson();
    
        try {
            const response = await fetch('http://192.168.0.21:8000/api/orders/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: orderData,
            });
    
            // Verifica se a resposta é ok (status 200-299)
            if (response.ok) {
                const responseBody = await response.json(); // Extrai o corpo da resposta
                console.log('Resposta da API:', responseBody); // Exibe o corpo da resposta no console
                return true; // Retorna true caso a resposta seja bem-sucedida
            } else {
                const errorBody = await response.json(); // Extrai o corpo da resposta de erro
                console.error('Erro na resposta da API:', errorBody);
                setErrorMessage(`Erro: ${errorBody.detail || 'Erro desconhecido'}`); // Define a mensagem de erro
                setOpenDialog(true); // Exibe o diálogo com a mensagem de erro
                return false; // Retorna false em caso de erro
            }
    
        } catch (error) {
            console.error('Erro ao enviar pedido:', error);
            setErrorMessage('Erro ao enviar pedido: ' + error); // Exibe o erro
            setOpenDialog(true); // Exibe o diálogo com a mensagem de erro
            return false; // Retorna false em caso de falha
        }
    };

    return (
        <>
            <Button
                onClick={handleSubmit}
                aria-label="comment"
                sx={{
                    padding: "20px",
                    width: "100%",
                    backgroundColor: '#5c4227',
                    color: '#fff',
                    '&:hover': { backgroundColor: '#7d654b' }
                }}
            >
                Enviar pedido
            </Button>

            {/* Exibe o diálogo apenas se houver erros */}
            <Dialog
                icon={errorMessage ? <ErrorIcon sx={{ color : '#ff0000', fontSize : '30px' }}/> : <DoneOutlineIcon sx={{ color : '#00a000', fontSize : '30px' }} />}
                text={errorMessage ? errorMessage : 'Pedido Enviado com sucesso!'}
                open={openDialog}
                setOpen={setOpenDialog}
                title={errorMessage ? 'Atenção' : 'Enviado!'}
            />

            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={openBackdrop}
                >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    );
}
