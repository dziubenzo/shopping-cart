import PropTypes from 'prop-types';
import CartItem from './CartItem';
import css from './Cart.module.scss';

function Cart({ cart, handleCart, cartItemCount }) {
  // Show items with quantity > 0
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
            handleItemChange={handleItemChange}
          />,
        );
      }
    }
    return cartItems;
  }

  // Calculate total amount to be paid
  function getTotal() {
    return cart.reduce((total, currentItem) => {
      return (total += currentItem.quantity * currentItem.price);
    }, 0);
  }

  // Decrease or increase item quantity or remove it from cart
  function handleItemChange(itemTitle, mode) {
    handleCart(
      cart.map((item) => {
        if (item.title === itemTitle) {
          if (mode === 'decrease' && item.quantity >= 2) {
            item.quantity -= 1;
          } else if (mode === 'increase') {
            item.quantity += 1;
          } else if (mode === 'remove') {
            item.quantity = 0;
          }
          return item;
        } else {
          return item;
        }
      }),
    );
  }
  return (
    <>
      {cartItemCount ? (
        <div className={css.wrapper}>
          <h2 className={css.title}>
            Cart (
            {cartItemCount === 1
              ? `${cartItemCount} item`
              : `${cartItemCount} items`}
            )
          </h2>
          <table>
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
          <div className={css.totalWrapper}>
            <button className={css.button} disabled="disabled">
              Proceed To Checkout <br />
              <span>({getTotal().toFixed(2)} $)</span>
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h1 className={css.cartEmptyMessage}>No items in cart</h1>
        </div>
      )}
    </>
  );
}

Cart.propTypes = {
  cart: PropTypes.array,
  handleCart: PropTypes.func,
  cartItemCount: PropTypes.number,
};

export default Cart;
