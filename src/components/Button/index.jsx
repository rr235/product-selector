import React from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

const Button = ({ children, className }) => (
  <button type="button" className={classNames(styles.button, className)}>
    {children}
  </button>
);

Button.propTypes = {
  children: node.isRequired,
  className: string,
};

Button.defaultProps = {
  className: null,
};

export default Button;
