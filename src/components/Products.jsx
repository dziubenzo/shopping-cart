import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import css from './Products.module.scss';

function Products({ products, error, loading, handleCart }) {
  // Create ProductCard components for all products
  function createCards() {
    let productArray = [];
    for (const product of products) {
      productArray.push(
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          description={product.description}
          rate={product.rating.rate}
          count={product.rating.count}
          handleCart={handleCart}
        />,
      );
    }
    return productArray;
  }
  return (
    <>
      {error && <h1>{error.message}</h1>}
      {loading && <h1>Loading products...</h1>}
      {products && (
        <>
          <h1 className={css.allProducts}>All Products ({products.length})</h1>
          <div className={css.cards}>{createCards()}</div>
        </>
      )}
    </>
  );
}

Products.propTypes = {
  products: PropTypes.array,
  error: PropTypes.object,
  loading: PropTypes.bool,
  handleCart: PropTypes.func,
};

export default Products;
