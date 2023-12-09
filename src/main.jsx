import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";

import { createBrowserRouter,RouterProvider } from 'react-router-dom'

import DashboardPage from "../src/pages/dashboard"
import ProductPages from './pages/products/index.jsx'
import CartPages from "./pages/cart/index.jsx"
import ProfilePages from "./pages/profile/index.jsx"
import PaymentsDonePages from "./pages/payments"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/dashboard",
    element: <DashboardPage />
  },
  {
    path: "/dashboard/:name",
    element: <ProductPages />
  },
  {
    path: "/dashboard/cart",
    element: <CartPages />
  },
  {
    path: "/dashboard/profile",
    element: <ProfilePages />
  },
  {
    path: "/dashboard/payments/done",
    element : <PaymentsDonePages />
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
