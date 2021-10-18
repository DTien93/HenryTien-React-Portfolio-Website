import React, { useState } from 'react'
import Intro from './components/Intro/Intro'
import About from './components/about/About'
import ProductList from './components/ProductList'
import Contact from './components/Contact'
import Toggle from './components/toggle'
import { ThemeProvider } from './context'

const App = () => {
  const [dark, setDark] = useState(false)
  return (
    <>
      <Toggle setDark={setDark}/>
      <Intro dark={dark}/>
      <About dark={dark} />
      <ProductList dark={dark} />
      <Contact dark={dark}/>
    </>
  )
}

export default App
