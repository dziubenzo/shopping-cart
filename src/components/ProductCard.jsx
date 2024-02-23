import PropTypes from 'prop-types';

function ProductCard({ id, title, image, price, description, rate, count }) {
  return (
    <div>
      <p>{title}</p>
      <img src={image} alt={title} />
      <p>{description}</p>
      <p>{price}</p>
      <div>
        <p>{rate}</p>
        <img src="./star.svg" alt="Star Icon" />
        <p>{count} votes</p>
      </div>
      <div>
        <button type="button">
          <img src="./minus-box.svg" alt="Decrease Quantity Icon" />
        </button>
        <input
          type="number"
          name={'product' + id}
          id={'product' + id}
          value={0}
        />
        <button type="button">
          <img src="./plus-box.svg" alt="Increase Quantity Icon" />
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  rate: PropTypes.number,
  count: PropTypes.number,
};

export default ProductCard;
