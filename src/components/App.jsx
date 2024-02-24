import PropTypes from 'prop-types';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';
import ErrorPage from './ErrorPage';
import AppTitle from './AppTitle';
import NavBar from './NavBar';
import DevInfo from './DevInfo';
import css from './App.module.scss';
import useFetch from '../helpers.jsx';
import { useEffect, useState } from 'react';

function App({ route }) {
  // Fetch data from Fake Store API
  const { data, error, loading } = useFetch(
    'https://fakestoreapi.com/products',
  );
  const [cart, setCart] = useState([]);

  // Set cart once the products are fetched
  useEffect(() => {
    function createCart() {
      let cart = [];
      for (const item of data) {
        item.quantity = 0;
        cart.push(item);
      }
      return cart;
    }

    if (data && cart.length === 0) {
      setCart(createCart());
    }
  }, [cart.length, data]);

  function handleAddToCart(quantity, id) {
    setCart(
      cart.map((item) => {
        if (item.id === id) {
          item.quantity += quantity;
          return item;
        } else {
          return item;
        }
      }),
    );
  }

  return (
    <>
      <header className={css.header}>
        <AppTitle />
        <NavBar />
      </header>
      <main>
        {route === 'home' && <Home />}
        {route === 'products' && (
          <Products
            products={data}
            error={error}
            loading={loading}
            handleCart={handleAddToCart}
          />
        )}
        {route === 'cart' && <Cart />}
        {route === 'error' && <ErrorPage />}
      </main>
      <footer>
        <DevInfo />
      </footer>
    </>
  );
}

App.defaultProps = {
  route: 'home',
};

App.propTypes = {
  route: PropTypes.string,
};

export default App;
