import React from 'react';
import { string } from 'prop-types';

const ProductInfo = ({ title, imageUrl }) => (
  <div>
    <img src={imageUrl} alt={title} />
    <h1>{title}</h1>
  </div>
);

ProductInfo.propTypes = {
  title: string.isRequired,
  imageUrl: string,
};

ProductInfo.defaultProps = {
  imageUrl: '',
};

export default ProductInfo;
