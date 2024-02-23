import PropTypes from 'prop-types';

function Products({ products, error, loading }) {
  return (
    <>
      {error && <h1>{error.message}</h1>}
      {loading && <h1>Loading products...</h1>}
      {products && <h1>All Products ({products.length})</h1>}
    </>
  );
}

Products.propTypes = {
  products: PropTypes.array,
  error: PropTypes.object,
  loading: PropTypes.bool,
};

export default Products;
