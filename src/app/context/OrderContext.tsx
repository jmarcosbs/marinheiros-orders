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
  dateTime: Date | null;
  setDateTime: (dateTime: Date | null) => void;
  dishes: Dish[];
  setDishes: React.Dispatch<React.SetStateAction<Dish[]>>; // Tipo correto para setDishes
  note: string;
  setNote: (note: string) => void;
  getOrderAsJson: () => string;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tableNumber, setTableNumber] = useState<number>(0);
  const [waiter, setWaiter] = useState<string>('');
  const [dateTime, setDateTime] = useState<Date | null>(null);
  const [dishes, setDishes] = useState<Dish[]>(() => {
    // Recupera os dishes do localStorage ao inicializar, se estiver no cliente
    if (typeof window !== 'undefined') {
      const storedDishes = localStorage.getItem('dishes');
      if (storedDishes) {
        return JSON.parse(storedDishes)
      } else {
        return []
      }

    } 
  });
  const [isOutside, setIsOutside] = useState<boolean>(false);
  const [note, setNote] = useState<string>('');

  useEffect(() => {
    // Armazena os dishes no localStorage sempre que eles mudam, se estiver no cliente
    if (typeof window !== 'undefined') {
      localStorage.setItem('dishes', JSON.stringify(dishes));
    }
  }, [dishes]);

  const getOrderAsJson = () => {
    const order = {
      tableNumber,
      waiter,
      dateTime: dateTime ? dateTime.toISOString() : null,
      dishes,
      note,
    };
    return JSON.stringify(order);
  };

  return (
    <OrderContext.Provider value={{ tableNumber, setTableNumber, waiter, setWaiter, isOutside, setIsOutside, dateTime, setDateTime, dishes, setDishes, getOrderAsJson, note, setNote }}>
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
