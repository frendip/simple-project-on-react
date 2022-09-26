import React from 'react';
import "./styles/App.scss"
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/UI/NavBar/NavBar";

function App() {
  return (
    <div>
      <BrowserRouter>
          <NavBar/>
          <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
