import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./components/Home";
import React from "react";
import Navbar from "./components/Navbar";
import {Footer} from "./components/Footer";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/login",
        element: <h1>Login</h1>
    },
    // {
    //     path: "/meetings",
    //     element: <Meetings/>
    // }
])

function App() {
    return <>
        <Navbar/>
        <RouterProvider router={router}/>
        <Footer/>
    </>;
}

export default App;
