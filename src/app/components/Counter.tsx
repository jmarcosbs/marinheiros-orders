'use client'

import { ButtonGroup, Button } from '@mui/material';
import { Remove, Add } from '@mui/icons-material';
import { useState } from 'react';
import { Dish, useOrderContext } from '../context/OrderContext';

interface CounterProps {
    containerWidth: string;
    dishIndex: number; // Altere para dishIndex se esse for o nome que você quer usar
    dishDepartiment: string | null;
}

export default function Counter({ containerWidth, dishIndex, dishDepartiment }: CounterProps) {

    const { dishes, setDishes } = useOrderContext();

    // Obtenha o valor de amount do prato específico no contexto
    const currentDish = dishes[dishIndex];
    const initialAmount = currentDish ? currentDish.amount : 0;

    // Use o valor de initialAmount como valor inicial para o estado count
    const [count, setCount] = useState(() => initialAmount);

    const incrementCount = () => {

        setCount((prev) => (prev ? prev : 0) + (dishDepartiment == "Cozinha" ? 0.5 : 1));
        setDishes((prevDishes: Dish[]) =>
            prevDishes.map((dish, index) =>
                index === dishIndex ? { ...dish, amount: (dish.amount ?? 0) + (dishDepartiment == "Cozinha" ? 0.5 : 1) } : dish
            )
        );
    };

    const decrementCount = () => {
        setCount((prev) => Math.max((prev ? prev : 0) - (dishDepartiment == "Cozinha" ? 0.5 : 1), 0.5));
        setDishes((prevDishes: Dish[]) =>
            prevDishes.map((dish, index) =>
                index === dishIndex ? { ...dish, amount: Math.max((dish.amount ?? 0) - (dishDepartiment == "Cozinha" ? 0.5 : 1), 0) } : dish
            )
        );
    };

    return (
        <div className='flex flex-row items-center'>
            <ButtonGroup orientation="vertical" sx={{ width: containerWidth }}>
                <Button
                    onClick={incrementCount}
                    variant='contained'
                    sx={{ backgroundColor: '#5c422795', padding: '10px' }}
                >
                    <Add fontSize="small" />
                </Button>
                <Button
                    variant='contained'
                    onClick={decrementCount}
                    disabled={dishDepartiment == "Cozinha" ? (count ? count : 0) <= 0.5 : (count ? count : 0) <= 1}
                    sx={{ backgroundColor: '#5c422795', padding: '10px' }}
                >
                    <Remove fontSize="small" />
                </Button>
            </ButtonGroup>
        </div>
    );
}
