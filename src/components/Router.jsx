import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <App route="error" />,
    },
    {
      path: '/products',
      element: <App route="products" />,
    },
    {
      path: '/cart',
      element: <App route="cart" />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
