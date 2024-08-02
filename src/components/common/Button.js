import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

/**
 * Button component
 * @param {function} onClick - Function to handle button click
 * @param {node} children - Content to be displayed inside the button
 * @param {string} className - Additional classes for styling
 */
const Button = ({ onClick, children, className }) => (
  <button className={`button ${className}`} onClick={onClick}>
    {children}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func, // Function to handle click events
  children: PropTypes.node.isRequired, // Content inside the button
  className: PropTypes.string, // Additional classes for styling
}

Button.defaultProps = {
  onClick: () => {}, // Default onClick function (no-op)
  className: '', // Default empty string for className
}

export default Button
