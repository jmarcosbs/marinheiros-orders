'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';

export type Dish = {
  id: number;
  name: string | null;
  departiment: string | null;
  amount: number | null;
  note: string | null;
};

interface OrderContextProps {
  tableNumber: number;
  setTableNumber: (tableNumber: number) => void;
  waiter: string;
  setWaiter: (note: string) => void;
  isOutside: boolean;
  setIsOutside: (isOutside: boolean) => void;
  dishes: Dish[];
  setDishes: React.Dispatch<React.SetStateAction<Dish[]>>; // Tipo correto para setDishes
  note: string;
  setNote: (note: string) => void;
  getOrderAsJson: () => string;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tableNumber, setTableNumber] = useState<number>(() => {
    // Recupera os dishes do localStorage ao inicializar, se estiver no cliente
    if (typeof window !== 'undefined') {
      const storedTableNumber = localStorage.getItem('tableNumber');
      return storedTableNumber ? parseInt(storedTableNumber, 10) : 0
    } 
    return 0
  });

  const [waiter, setWaiter] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const storedWaiter = localStorage.getItem('waiter');
      return storedWaiter || '';
    }
    return '';
  });

  const [dishes, setDishes] = useState<Dish[]>(() => {
    if (typeof window !== 'undefined') {
      const storedDishes = localStorage.getItem('dishes');
      return storedDishes ? JSON.parse(storedDishes) : [];
    }
    return [];
  });
  
  const [isOutside, setIsOutside] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const storedOutside = localStorage.getItem('isOutside');
      return storedOutside === 'true';
    }
    return false;
  });
  
  const [note, setNote] = useState<string>('');

  useEffect(() => {
    // Armazena os dishes no localStorage sempre que eles mudam, se estiver no cliente
    if (typeof window !== 'undefined') {
      localStorage.setItem('dishes', JSON.stringify(dishes));
    }
  }, [dishes]);

  const getOrderAsJson = () => {

    const order_dishes = dishes.map(dish => ({
        dish: {
            id: dish.id,
            department: dish.departiment,
            dish_name: dish.name
        },
        amount: dish.amount,
        dish_note: dish.note
    }));

    const order = {
        table_number: tableNumber,
        waiter: waiter,
        is_outside: isOutside,
        order_note: note,
        order_dishes
    };

    return JSON.stringify(order);
};

  return (
    <OrderContext.Provider value={{ tableNumber, setTableNumber, waiter, setWaiter, isOutside, setIsOutside, dishes, setDishes, getOrderAsJson, note, setNote }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrderContext = (): OrderContextProps => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrderContext deve ser usado dentro de um OrderProvider");
  }
  return context;
};
