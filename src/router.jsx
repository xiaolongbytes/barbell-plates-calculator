import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from './pages/ErrorPage';
import { EditWeightInventoryPage } from './pages/EditWeightInventoryPage';
import { CalculateBarbellPage } from './pages/CalculateBarbellPage';
import { HomePage } from './pages/HomePage';
import { Root } from './pages/Root';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <CalculateBarbellPage /> },
            {
                // TODO: use lookup object (aka a key:string object like in state.js) for the path values
                // this means that the path string could be imported via key using the lookup object instead of strings
                path: 'inventory',
                element: <EditWeightInventoryPage />,
            },
            // {
            //     path: 'barbellcalculator',
            //     element: <CalculateBarbellPage />,
            // },
        ],
    },
]);
