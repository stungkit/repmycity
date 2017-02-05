import React from 'react';
let { connect } = require('react-redux');
let actions = require('actions');

import Product from 'Product';
import ProductItem from 'ProductItem';

class Products extends React.Component {
  constructor() {
    super();
  }

  handleAddToCart(product) {
    let {dispatch} = this.props;
    dispatch(actions.addToCart(product));
  }

  render() {
    let {products} = this.props;

    if (products.length > 0) {
      return (
        <div className="row">
          {products.map(product => {
            return <ProductItem key={product.key} addToCart={() => this.handleAddToCart(product)} id={product.product_id} title={product.title} />
          })}
        </div>
      )
    }else{
      return (
        <div>Loading products...</div>
      )
    }
  }
}

export default connect(
  (state) => {
    return {
      products: state.products.all
    }
  }
)(Products);