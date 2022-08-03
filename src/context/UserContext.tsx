import { createContext } from "react";
interface UserContextInterface {
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<UserContextInterface>({
  loggedIn: false,
  setLoggedIn: () => {},
});
