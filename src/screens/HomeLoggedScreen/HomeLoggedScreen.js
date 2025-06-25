import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function HomeLoggedScreen() {
  const { email, logout } = useContext(AuthContext);
  return (
    <div>
      <h1>HomeLoggedScreen</h1>
      <p>Email del usuario logueado {email}</p>
      <button onClick={logout}>Cerrar sesion</button>
    </div>
  );
}
