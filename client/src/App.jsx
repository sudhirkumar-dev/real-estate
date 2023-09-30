// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/signIn";
import SignOut from "./pages/SignOut";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/sign-out" element={<SignOut />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}
