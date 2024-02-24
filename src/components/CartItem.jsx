import PropTypes from 'prop-types';
import css from './CartItem.module.scss';

function CartItem({ count, title, quantity, price }) {
  return (
    <tr>
      <th scope="row">{count}</th>
      <td className={css.price}>{title}</td>
      <td>{price.toFixed(2)}</td>
      <td>{quantity}</td>
      <td>{(quantity * price).toFixed(2)}</td>
      <td>
        <button className={css.button} type="button">
          <img
            className={css.buttonIcon}
            src="./minus-box.svg"
            alt="Decrease Quantity Icon"
          />
        </button>
      </td>
      <td>
        <button className={css.button} type="button">
          <img
            className={css.buttonIcon}
            src="./plus-box.svg"
            alt="Increase Quantity Icon"
          />
        </button>
      </td>
      <td>
        <button className={css.button} type="button">
          <img
            className={css.buttonIcon}
            src="./close.svg"
            alt="Remove Item Icon"
          />
        </button>
      </td>
    </tr>
  );
}

CartItem.propTypes = {
  count: PropTypes.number,
  title: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
};

export default CartItem;
