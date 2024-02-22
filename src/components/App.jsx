import PropTypes from 'prop-types';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';
import ErrorPage from './ErrorPage';
import css from './App.module.scss';
import AppTitle from './AppTitle';

function App({ route }) {
  return (
    <>
      <header>
        <AppTitle />
      </header>
      <main>
        {route === 'home' && <Home />}
        {route === 'products' && <Products />}
        {route === 'cart' && <Cart />}
        {route === 'error' && <ErrorPage />}
      </main>
      <footer>
        <h2>Footer</h2>
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
