import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import EditWeightInventoryPage from './pages/EditWeightInventoryPage';
import CalculateBarbellPage from './pages/CalculateBarbellPage';
import HomePage from './pages/HomePage';
import Root from './pages/Root';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      {
        path: "inventory",
        element: <EditWeightInventoryPage />,
      },
      {
        path: "barbellcalculator",
        element: <CalculateBarbellPage />,
      }
    ]
  },
]);
