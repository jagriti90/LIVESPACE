import React from 'react' 
// import About from './pages/About'
// import Hero from './pages/Hero'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Header from './pages/Header'
import Hero from './pages/Hero'

// const router =createBrowserRouter([
//   {
//     path:'/'
//     element: <Hero />
//   }
// ])

const App = () => {
  return (
    <>
    <Header />
    <Hero />
    <About />
  
    </>
  )
}

export default App
