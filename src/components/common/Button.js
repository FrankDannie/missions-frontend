import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ onClick, children, className }) => (
  <button className={`button ${className}`} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
};

export default Button;
