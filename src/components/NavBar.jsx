import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './NavBar.module.scss';

function NavBar({ cartItemCount }) {
  // Apply class based on current path
  const location = useLocation();
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li>
          <Link
            className={location.pathname === '/' ? css.active : css.link}
            to={'/'}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={
              location.pathname === '/products' ? css.active : css.link
            }
            to={'/products'}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            data-count={cartItemCount}
            className={location.pathname === '/cart' ? css.active : css.link}
            to={'/cart'}
          >
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  cartItemCount: PropTypes.number,
};

export default NavBar;
