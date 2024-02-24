import PropTypes from 'prop-types';
import CartItem from './CartItem';
import css from './Cart.module.scss';

function Cart({ cart }) {
  function renderItemsInCart() {
    let cartItems = [];
    let count = 0;
    for (const item of cart) {
      if (item.quantity > 0) {
        count++;
        cartItems.push(
          <CartItem
            key={item.id}
            count={count}
            title={item.title}
            quantity={item.quantity}
            price={item.price}
          />,
        );
      }
    }
    return cartItems;
  }
  return (
    <>
      <h2>
        Cart (
        {renderItemsInCart().length === 1
          ? `${renderItemsInCart().length} item`
          : `${renderItemsInCart().length} items`}
        )
      </h2>
      <table className={css.table}>
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
            <th scope="col">Less</th>
            <th scope="col">More</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>{renderItemsInCart()}</tbody>
      </table>
    </>
  );
}

Cart.propTypes = {
  cart: PropTypes.array,
};

export default Cart;
