'use client'
import React, { createContext, useContext, useState } from 'react';

interface OrderContextProps {
  tableNumber: string;
  setTableNumber: (tableNumber: string) => void;
}

const OrderContext = createContext<OrderContextProps | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tableNumber, setTableNumber] = useState<string | "">(""); // Número da mesa inicial

  return (
    <OrderContext.Provider value={{ tableNumber, setTableNumber }}>
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
