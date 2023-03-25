import { createContext } from "react";

export const LoginState = createContext({
  userName: "",
  setUserName: () => {},
});
