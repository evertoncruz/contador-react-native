import React, { createContext, useContext, useState, ReactNode } from "react";

type CounterContextType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = (): CounterContextType => {
  const context = useContext(CounterContext);
  if (!context)
    throw new Error("useCounter must be used within a CounterProvider");
  return context;
};
