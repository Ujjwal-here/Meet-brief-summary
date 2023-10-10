import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import {Home} from "./components/Home/Home";
import {Layout} from "./components/Layout/Layout";
import {Login} from "./components/Login/Login";
import {Signup} from "./components/Signup/Signup";


function App() {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route element={<Layout/>}>
                    <Route path="/" element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </>;
}

export default App;
