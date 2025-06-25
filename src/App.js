import React from "react";
import AuthProvider from "./context/AuthContext";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import "./App.css"

export default function App() {
  return (
    <AuthProvider>
      <HomeScreen />
    </AuthProvider>
  );
}
