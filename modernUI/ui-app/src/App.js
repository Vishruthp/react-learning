import React from 'react'
import { Footer,Blog, Possibility, Features, WhatGPT3, Header } from './containers/fetchContainers'
import {CTA, Brand, Navbar} from './components/fetchComponents';
const App = () => {
    return (
        <div className="App">
            <div className="gradiant__bg">
               <Navbar></Navbar>
               <Header></Header>
            </div>
            <Brand/>
            <WhatGPT3/>
            <Features/>
            <Possibility/>
            <CTA/>
            <Blog/>
            <Footer/>
            </div>
    )
}

export default App
