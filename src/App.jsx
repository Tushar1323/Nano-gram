
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'

import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  const img = "src/Images/sky.jpg"

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'
    >
      <div className='w-full flex flex-col gap-10'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : "Loading..."
}

export default App


// Slug - A slug is the part of a URL that identifies a specific page or post on a website. It's typically located at the end of the URL, after the backslash, and often contains the page or article name, or a shorter version of it, with dashes instead of spaces.
// Appwrite / FireBase - BAAS 

