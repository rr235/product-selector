import React from 'react';
import { node, string, oneOfType, object, func } from 'prop-types';
import classNames from 'classnames';
import styles from './styles.scss';

const Button = ({ children, className, onClick }) => (
  <button type="button" className={classNames(styles.button, className)} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: node.isRequired,
  className: oneOfType([string, object]),
  onClick: func,
};

Button.defaultProps = {
  className: null,
  onClick: null,
};

export default Button;
