import { createContext } from "react";

export const CartState = createContext({
  jumlahItem: 0,
  setJumlahItem: () => {},
});
