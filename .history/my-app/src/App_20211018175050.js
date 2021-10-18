import React, { useState } from 'react'
import Intro from './components/Intro/Intro'
import About from './components/about/About'
import ProductList from './components/ProductList'
import Contact from './components/Contact'
import Toggle from './components/toggle'
import { ThemeContext } from './context'


const App = () => {
  const theme = useContext(ThemeContext)
  return (
    <div style={{backgroundColor: 'black', color: 'white'}}>
            <Toggle/>
            <Intro/>
            <About/>
            <ProductList />
            <Contact />
    </div>
  )
}

export default App
