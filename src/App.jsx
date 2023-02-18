import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import ContactUs from './Pages/Contact Us/ContactUs'
import SignIn from './Pages/Sign In/SignIn'
import SingOut from './Pages/Sign Out/SingOut'
import Main from './Pages/Shared/Main'

function App() {
  const router = createBrowserRouter([
{
  path:"/",
  element: <Main/>,
  children:[
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/contact-us",
      element:<ContactUs/>
    },
    {
      path:"/sign-in",
      element:<SignIn/>
    },
    {
      path:"/sign-out",
      element:<SingOut/>
    }
  ]
}
  ])

  return (
    
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
