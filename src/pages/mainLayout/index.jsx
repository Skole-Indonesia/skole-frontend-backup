import { React, useEffect } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";
import axiosClient from "../../axios-client";

const index = () => {
  const { user, token, setUser, setToken, notification } = useStateContext();

  const onLogout = (ev) => {
    ev.preventDefault();

    axiosClient.get("/dewantara-muda-logout").then(() => {
      setUser({});
      setToken(null);
    });
  };

  useEffect(() => {
    axiosClient.get("/mardika").then(({ data }) => {
      setUser(data);
    });
    console.log(user);
  }, []);

  if (!token) {
    return <Navigate to="/beranda" />;
  }
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default index;
