import PropTypes from 'prop-types';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';
import ErrorPage from './ErrorPage';
import AppTitle from './AppTitle';
import NavBar from './NavBar';
import DevInfo from './DevInfo';
import css from './App.module.scss';

function App({ route }) {
  return (
    <>
      <header className={css.header}>
        <AppTitle />
        <NavBar />
      </header>
      <main>
        {route === 'home' && <Home />}
        {route === 'products' && <Products />}
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
