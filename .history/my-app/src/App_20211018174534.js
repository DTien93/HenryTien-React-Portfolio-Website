import React, { useState } from 'react'
import Intro from './components/Intro/Intro'
import About from './components/about/About'
import ProductList from './components/ProductList'
import Contact from './components/Contact'
import Toggle from './components/toggle'
import { ThemeProvider } from './context'

const App = () => {
  return (
    <>
      <Toggle/>
      <Intro/>
      <About/>
      <ProductList />
      <Contact/>
    </>
  )
}

export default App
