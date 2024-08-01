import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RobotList from '../../../src/components/robots/RobotList';
import { fetchRobots } from '../../../src/services/api';
import '@testing-library/jest-dom/extend-expect';

jest.mock('../../../src/services/api');

describe('RobotList', () => {
  test('renders a list of robots', async () => {
    // Mock fetchRobots to return sample data
    fetchRobots.mockResolvedValue({ data: [{ id: '1', name: 'Robot 1', model_name: 'Model 1' }] });

    // Define a mock function for onSelect
    const mockOnSelect = jest.fn();

    // Render RobotList component with mocked data and callback
    render(<RobotList robots={[{ id: '1', name: 'Robot 1', model_name: 'Model 1' }]} onSelect={mockOnSelect} />);

    // Assert that Robot 1 is present in the document
    await waitFor(() => expect(screen.getByText('Robot 1')).toBeInTheDocument());
  });

  test('opens form on row click', async () => {
    // Mock fetchRobots to return sample data
    fetchRobots.mockResolvedValue({ data: [{ id: '1', name: 'Robot 1', model_name: 'Model 1' }] });

    // Define a mock function for onSelect
    const mockOnSelect = jest.fn();

    // Render RobotList component with mocked data and callback
    render(<RobotList robots={[{ id: '1', name: 'Robot 1', model_name: 'Model 1' }]} onSelect={mockOnSelect} />);

    // Click on the row to trigger onSelect
    await waitFor(() => fireEvent.click(screen.getByText('Robot 1')));

    // Assert that the onSelect function was called with the correct argument
    expect(mockOnSelect).toHaveBeenCalledWith('1');
  });
});
