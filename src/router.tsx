import { createBrowserRouter, Navigate } from 'react-router-dom';

export default createBrowserRouter([
    {
        path: '/',
        element: <div>Feed</div>
    },
    {
        path: '/video/:id',
        element: <div>Video Page</div>
    },
    {
        path: '/channel/:id',
        element: <div>Channel Page</div>
    },
    {
        path: '/search/:request',
        element: <div>Search</div>
    },
    {
        path: '/*',
        element: <Navigate to='/' replace />
    }
])