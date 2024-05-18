import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import './index.css'
import ErrorPage from './routes/ErrorPage.jsx'
import Home from './routes/Home.jsx'
import AboutMe from './routes/AboutMe.jsx'
import Portfolio from './routes/Portfolio.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/socialMediaBeatriz',
        element: <Home />
      },
      {
        path: '/socialMediaBeatriz/aboutMe',
        element: <AboutMe />
      },
      {
        path: '/socialMediaBeatriz/portfolio',
        element: <Portfolio />
      }
    ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
