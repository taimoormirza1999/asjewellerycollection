import { createContext,useState,useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {
      const [user] = useState({name:'Taimoor',email:'taimoorhamza1999@gmail.com',userid:2});
  return  <UserContext.Provider value={{user}}>{children}</UserContext.Provider>

}
export const useUser = () => {
  return useContext(UserContext);
};
