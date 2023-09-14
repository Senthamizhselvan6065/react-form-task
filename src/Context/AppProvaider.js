import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();
const AppProvaider = ({ children }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const responce = await fetch(
          "https://6422c86677e7062b3e22836f.mockapi.io/users",
          {
            method: "GET",
          }
        );
        const data = await responce.json();
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserDetails();
  }, []);
  return (
    <div>
      <AppContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        {children}
      </AppContext.Provider>
    </div>
  );
};

export const AppSate = () => {
  return useContext(AppContext);
};

export default AppProvaider;
