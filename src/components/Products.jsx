import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

function Products({ products, error, loading }) {
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
        />,
      );
    }
    return productArray;
  }

  function renderProducts() {
    return (
      <>
        <h1>All Products ({products.length})</h1>
        <div>{createCards()}</div>
      </>
    );
  }
  return (
    <>
      {error && <h1>{error.message}</h1>}
      {loading && <h1>Loading products...</h1>}
      {products && renderProducts()}
    </>
  );
}

Products.propTypes = {
  products: PropTypes.array,
  error: PropTypes.object,
  loading: PropTypes.bool,
};

export default Products;
