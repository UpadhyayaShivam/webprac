import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from './Layout.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import PostsContainer from './components/PostsContainer/PostsContainer.jsx'

import './App.css'
const App=()=>{


    return(
            <BrowserRouter className="app">
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<PostsContainer/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
    )

}

export default App;