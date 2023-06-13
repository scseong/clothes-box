import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import App from './App';
import Products from './pages/Products';
import Cart from './pages/Cart';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
]);
