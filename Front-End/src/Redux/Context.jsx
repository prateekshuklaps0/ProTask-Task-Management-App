import { useState, createContext } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [loggedInUser, setLoggedInUser] = useState({});
  const [userNameLogged, setUserNameLogged] = useState("");

  return (
    <Context.Provider
      value={{
        token,
        setToken,
        loggedInUser,
        setLoggedInUser,
        userNameLogged,
        setUserNameLogged,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
