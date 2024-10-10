'use client'

import { ButtonGroup, Button } from '@mui/material';
import { Remove, Add } from '@mui/icons-material';
import { useState } from 'react';
import { useOrderContext } from '../context/OrderContext';

interface CounterProps {
    containerWidth: string;
    dishIndex: number; // Altere para dishIndex se esse for o nome que você quer usar
    dishDepartiment: string | null;
}

export default function Counter({ containerWidth, dishIndex, dishDepartiment }: CounterProps) {

    const [count, setCount] = useState(1);
    const { setDishes } = useOrderContext();

    const incrementCount = () => {

        setCount((prev) => prev + (dishDepartiment == "Cozinha" ? 0.5 : 1));
        setDishes((prevDishes) =>
            prevDishes.map((dish, index) =>

                index === dishIndex ? { ...dish, amount: (dish.amount ?? 0) + (dishDepartiment == "Cozinha" ? 0.5 : 1) } : dish

            )
        );
    };

    const decrementCount = () => {
        setCount((prev) => Math.max(prev - (dishDepartiment == "Cozinha" ? 0.5 : 1), 0.5));
        setDishes((prevDishes) =>
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
                    disabled={dishDepartiment == "Cozinha" ? count === 0.5 : count === 1}
                    sx={{ backgroundColor: '#5c422795', padding: '10px' }}
                >
                    <Remove fontSize="small" />
                </Button>
            </ButtonGroup>
        </div>
    );
}
