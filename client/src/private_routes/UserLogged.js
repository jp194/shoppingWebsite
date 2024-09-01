import axios from "axios";
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "../context/auth";
import Spinner from "../components/Spinner.js";

export default function UserLogged() {
  const [auth, setAuth] = useAuth();

  const [ok, setOk] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log(auth?.token);
        const isAdmin = await axios.get(
          `${process.env.REACT_APP_API}/checkUserLoggedIn`,
          {
            headers: {
              authorization: auth?.token,
            },
          }
        );

        setOk(isAdmin.data.success);
      } catch (e) {
        return null;
      }
    }

    if (auth?.token) fetchData();
  }, [auth]);
  return ok ? <Outlet /> : <Spinner time={5} />;
}
