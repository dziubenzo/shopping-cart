import PropTypes from 'prop-types';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';
import ErrorPage from './ErrorPage';
import css from './App.module.scss';

function App({ route }) {
  return (
    <>
      <h2>Header</h2>
      {route === 'home' && <Home />}
      {route === 'products' && <Products />}
      {route === 'cart' && <Cart />}
      {route === 'error' && <ErrorPage />}
      <h2>Footer</h2>
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
