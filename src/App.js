import React from 'react';
import './App.css';
import Login from './components/Login';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adopta from './components/Adopta';
import DetailRobot from './components/DetailRobot';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/robots/" element={<Adopta />} />
      <Route path="/robotDetail/:id" element={<DetailRobot />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
