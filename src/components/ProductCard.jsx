import PropTypes from 'prop-types';
import css from './ProductCard.module.scss';
import { useState } from 'react';

function ProductCard({ id, title, image, price, description, rate, count }) {
  const [quantity, setQuantity] = useState(0);

  function handleDecreaseQuantity() {
    if (quantity === 0) {
      return;
    }
    setQuantity(quantity - 1);
  }

  function handleIncreaseQuantity() {
    if (quantity === 99) {
      return;
    }
    setQuantity(quantity + 1);
  }

  function handleInputQuantity(event) {
    const value = Number(event.target.value);
    if (value < 0 || value > 99) {
      return;
    }
    setQuantity(value);
  }

  return (
    <div className={css.card}>
      <div className={css.cardImageWrapper}>
        <img className={css.cardImage} src={image} alt={title} />
      </div>
      <div className={css.cardInfo}>
        <p className={css.title}>{title}</p>
        <p className={css.description}>{description}</p>
        <p className={css.price}>{price.toFixed(2)} $</p>
        <div className={css.rating}>
          <p className={css.rate}>{rate}</p>
          <img className={css.star} src="./star.svg" alt="Star Icon" />
          <p className={css.count}>{count} votes</p>
        </div>
        <div className={css.quantity}>
          <button
            className={css.button}
            type="button"
            onClick={handleDecreaseQuantity}
          >
            <img
              className={css.buttonIcon}
              src="./minus-box.svg"
              alt="Decrease Quantity Icon"
            />
          </button>
          <input
            className={css.input}
            type="number"
            name={'product' + id}
            id={'product' + id}
            max={99}
            value={quantity}
            onChange={handleInputQuantity}
          />
          <button
            className={css.button}
            type="button"
            onClick={handleIncreaseQuantity}
          >
            <img
              className={css.buttonIcon}
              src="./plus-box.svg"
              alt="Increase Quantity Icon"
            />
          </button>
          <button className={css.addToCartButton} type="button">
            <img
              className={css.buttonIcon}
              src="./cart-plus.svg"
              alt="Add To Cart Icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  rate: PropTypes.number,
  count: PropTypes.number,
};

export default ProductCard;
