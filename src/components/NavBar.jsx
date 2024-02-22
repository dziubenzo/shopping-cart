import { Link } from 'react-router-dom';
import { useState } from 'react';
import css from './NavBar.module.scss';

function NavBar() {
  // Add active class to the currently browsed tab
  const [active, setActive] = useState('home');

  function handleActive(event) {
    setActive(event.target.textContent.toLowerCase());
  }

  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li>
          <Link
            onClick={handleActive}
            className={active === 'home' ? css.active : css.link}
            to={'/'}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            onClick={handleActive}
            className={active === 'products' ? css.active : css.link}
            to={'/products'}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            onClick={handleActive}
            className={active === 'cart' ? css.active : css.link}
            to={'/cart'}
          >
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
