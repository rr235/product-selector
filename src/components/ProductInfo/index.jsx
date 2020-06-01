import React from 'react';
import { string } from 'prop-types';
import styles from './styles.scss';

const ProductInfo = ({ title, imageUrl }) => (
  <div className={styles.container}>
    <img src={imageUrl} alt={title} className={styles.image} />
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
