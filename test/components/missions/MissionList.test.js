import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MissionList from '../../../src/components/missions/MissionList';
import '@testing-library/jest-dom/extend-expect';

describe('MissionList', () => {
  test('renders a list of missions', async () => {
    // Mock mission data
    const missions = [{ id: '1', name: 'Mission 1', description: 'Description 1', robot: '1' }];
    
    // Render component with mock data
    render(<MissionList missions={missions} onSelect={() => {}} />);

    // Check if mission name is rendered
    await waitFor(() => expect(screen.getByText('Mission 1')).toBeInTheDocument());
  });

  test('opens form on row click', async () => {
    // Mock mission data
    const missions = [{ id: '1', name: 'Mission 1', description: 'Description 1', robot: '1' }];
    
    // Mock function to handle row click
    const handleSelect = jest.fn();
    
    // Render component with mock data and click handler
    render(<MissionList missions={missions} onSelect={handleSelect} />);
    
    // Simulate row click
    await waitFor(() => fireEvent.click(screen.getByText('Mission 1')));
    
    // Check if onSelect was called with the correct argument
    expect(handleSelect).toHaveBeenCalledWith('1');
  });
});
