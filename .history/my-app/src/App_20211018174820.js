import React, { useState } from 'react'
import Intro from './components/Intro/Intro'
import About from './components/about/About'
import ProductList from './components/ProductList'
import Contact from './components/Contact'
import Toggle from './components/toggle'


const App = () => {
  return (
    <div style={{backgroundColor: 'black'}}>
            <Toggle/>
            <Intro/>
            <About/>
            <ProductList />
            <Contact />
    </div>
  )
}

export default App
