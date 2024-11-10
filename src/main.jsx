import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Electronics, Home, Jewellery, MenClothing, WomenClothing } from "./pages/index.js"
import { Provider } from 'react-redux'
import {store} from "./store/store.js"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/category/electronics",
        element: <Electronics/>
      },
      {
        path: "/category/jewelery",
        element: <Jewellery />
      },
      {
        path: "/category/men's clothing",
        element: <MenClothing />
      },
      {
        path: "/category/women's clothing",
        element: <WomenClothing />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>,
)