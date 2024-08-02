import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './Modal.css'

/**
 * Modal component
 * @param {node} children - Content to be displayed inside the modal
 * @param {function} onClose - Function to close the modal
 */
const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired, // Content inside the modal
  onClose: PropTypes.func.isRequired, // Function to close the modal
}

export default Modal
