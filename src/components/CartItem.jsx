import PropTypes from 'prop-types';
import css from './CartItem.module.scss';

function CartItem({ count, title, quantity, price, handleItemChange }) {
  return (
    <tr>
      <th scope="row">{count}</th>
      <td className={css.title}>{title}</td>
      <td>{price.toFixed(2)}</td>
      <td className={css.quantity}>{quantity}</td>
      <td className={css.total} data-testid="total-cell">
        {(quantity * price).toFixed(2)}
      </td>
      <td className={css.buttonCell}>
        <button
          className={css.button}
          type="button"
          onClick={() => handleItemChange(title, 'decrease')}
        >
          <img
            className={css.buttonIcon}
            src="./minus-box.svg"
            alt="Decrease Quantity Icon"
          />
        </button>
      </td>
      <td className={css.buttonCell}>
        <button
          className={css.button}
          type="button"
          onClick={() => handleItemChange(title, 'increase')}
        >
          <img
            className={css.buttonIcon}
            src="./plus-box.svg"
            alt="Increase Quantity Icon"
          />
        </button>
      </td>
      <td className={css.buttonCell}>
        <button
          className={css.button}
          type="button"
          onClick={() => handleItemChange(title, 'remove')}
        >
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
  handleItemChange: PropTypes.func,
};

export default CartItem;
