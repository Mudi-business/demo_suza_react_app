import "./App.css";
import React, { useContext,useMemo, useState } from "react";
import Home from "./views/Home";
import MainLayout from "./views/MainLayout";
//nimetengeneza class inaitwa App alfu nikarithi
//tabia za class ya React
import { AppContext } from "./context/AppContext";



export default function App() {
  //body

  return (
      <MainLayout />
  );

  //built method from React.component class
  //lazima tu return function ili kuweza kuziita
  //static files zetu
}
