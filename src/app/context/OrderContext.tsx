'use client'
import React, { createContext, useContext, useState, useEffect, Dispatch, SetStateAction } from 'react';

export type Dish = {
  id : number
  name : string | null;
  departiment : string | null;
  amount : number | null;
  note : string | null
};

interface OrderContextProps {
  tableNumber : number;
  setTableNumber : (tableNumber : number) => void;

  isOutside : boolean;
  setIsOutside : (isOutside : boolean) => void;

  dateTime : Date | null;
  setDateTime : (dateTime : Date | null) => void;

  dishes : Dish[];
  setDishes: Dispatch<SetStateAction<Dish[]>>; // Aqui você garante que setDishes aceita tanto um array quanto uma função

  note : string;
  setNote : (note : string) => void;

  getOrderAsJson : () => string;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export const OrderProvider : React.FC<{ children : React.ReactNode }> = ({ children }) => {
  const [tableNumber, setTableNumber] = useState<number>(0);
  const [dateTime, setDateTime] = useState<Date | null>(null);
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [isOutside, setIsOutside] = useState<boolean>(false);
  const [note, setNote] = useState<string | ''>('');

  // Monitora alterações no objeto completo
  useEffect(() => {
    const order = {
      tableNumber,
      isOutside,
      dateTime : dateTime ? dateTime.toISOString()  : null,
      dishes,
      note,
    };
    console.log("Order updated:", order);
  }, [tableNumber, isOutside, dateTime, dishes, note]);

  // Função para preparar o pedido em formato JSON
  const getOrderAsJson = () => {
    const order = {
      tableNumber,
      dateTime: dateTime ? dateTime.toISOString() : null,
      dishes,
      note
    };
    return JSON.stringify(order);
  };

  return (
    <OrderContext.Provider value={{ tableNumber, setTableNumber, isOutside, setIsOutside, dateTime, setDateTime, dishes, setDishes, getOrderAsJson, note, setNote }}>
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
