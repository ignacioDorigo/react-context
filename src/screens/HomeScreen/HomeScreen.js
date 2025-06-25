import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import HomeGuestScreen from "../HomeGuestScreen/HomeGuestScreen";
import HomeLoggedScreen from "../HomeLoggedScreen/HomeLoggedScreen";

export default function HomeScreen() {
  const { email } = useContext(AuthContext);
  console.log(email)

  return email === null ? (
    <HomeGuestScreen></HomeGuestScreen>
  ) : (
    <HomeLoggedScreen></HomeLoggedScreen>
  );
}
