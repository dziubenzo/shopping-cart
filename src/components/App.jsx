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

function App({ route }) {
  // Fetch data from Fake Store API
  const { data, error, loading } = useFetch(
    'https://fakestoreapi.com/products',
  );

  console.log(data);
  return (
    <>
      <header className={css.header}>
        <AppTitle />
        <NavBar />
      </header>
      <main>
        {route === 'home' && <Home />}
        {route === 'products' && (
          <Products products={data} error={error} loading={loading} />
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
