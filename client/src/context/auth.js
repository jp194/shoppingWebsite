import { createContext, useContext, useState, useEffect } from "react";

import React from "react";

const AuthContext = createContext();

function AuthProvider(props) {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
  });

  useEffect(() => {
    const parsedData = JSON.parse(localStorage.getItem("auth"));
    if (parsedData != null) {
      setAuth({ ...auth, user: parsedData.user, token: parsedData.token });
    }
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
}

// useAuth is a cusstom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
