import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from '../../../src/components/common/Modal';
import '@testing-library/jest-dom/extend-expect';

// Setup for modal root
beforeEach(() => {
  // Create a div with id 'modal-root' and append it to the body
  const modalRoot = document.createElement('div');
  modalRoot.setAttribute('id', 'modal-root');
  document.body.appendChild(modalRoot);
});

afterEach(() => {
  // Clean up after each test by removing the modal root
  const modalRoot = document.getElementById('modal-root');
  if (modalRoot) {
    document.body.removeChild(modalRoot);
  }
});

describe('Modal', () => {
  test('renders the modal and close button', () => {
    const handleClose = jest.fn();

    render(
      <Modal onClose={handleClose}>
        <div>Modal Content</div>
      </Modal>
    );

    // Check if the modal content is in the document
    expect(screen.getByText('Modal Content')).toBeInTheDocument();

    // Check if the close button is present and click it
    const closeButton = screen.getByText('X');
    fireEvent.click(closeButton);
    
    // Check if handleClose was called
    expect(handleClose).toHaveBeenCalled();
  });
});
