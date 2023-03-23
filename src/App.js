import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <div className='flex flex-col'>
        <Header />
        <Hero />
        <Home />
      </div>



    </>
  )
}

export default App
