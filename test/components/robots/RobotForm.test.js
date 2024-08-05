import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import RobotForm from '../../../src/components/forms/RobotForm';
import { createRobot, updateRobot, fetchRobotById } from '../../../src/services/api';
import '@testing-library/jest-dom/extend-expect';
import Labels from '../../../src/components/common/labels';

jest.mock('../../../src/services/api');

describe('RobotForm', () => {
    test('renders form for creating a new robot', () => {
        const { asFragment } = render(<RobotForm onClose={() => {}} />);
    
        expect(screen.getByText(Labels.robot.CREATE_TITLE)).toBeInTheDocument();
    
        // Select the first element matching the label
        expect(screen.getAllByLabelText(/Name/i)[0]).toBeInTheDocument();
        expect(screen.getAllByLabelText(/Model Name/i)[0]).toBeInTheDocument();
        expect(screen.getByRole('button', { name: Labels.form.CREATE })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: Labels.CANCEL })).toBeInTheDocument();
    
        // Snapshot for creating a new robot
        expect(asFragment()).toMatchSnapshot();
    });
    
    
  
    test('renders form with robot data for editing', async () => {
      fetchRobotById.mockResolvedValue({ data: { name: 'Robot 1', model_name: 'Model 1' } });
      const { asFragment } = render(<RobotForm robotId="1" onClose={() => {}} />);
  
      await waitFor(() => {
        expect(screen.getByDisplayValue('Robot 1')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Model 1')).toBeInTheDocument();
      });
  
      // Snapshot for editing an existing robot
      expect(asFragment()).toMatchSnapshot();
    });
  
    test('submits form data correctly for updating an existing robot', async () => {
        const handleClose = jest.fn();
        updateRobot.mockResolvedValue({ data: {} });
        fetchRobotById.mockResolvedValue({ data: { name: 'Robot 1', model_name: 'Model 1' } });
    
        // Destructure asFragment from render
        const { asFragment } = render(<RobotForm robotId="1" onClose={handleClose} />);
    
        // Wait for the form to populate
        await waitFor(() => {
            expect(screen.getAllByLabelText(/Name/i)[0]).toHaveValue('Robot 1');
            expect(screen.getAllByLabelText(/Model Name/i)[0]).toHaveValue('Model 1');
        });
    
        fireEvent.change(screen.getAllByLabelText(/Name/i)[0], { target: { value: 'Updated Robot' } });
        fireEvent.change(screen.getAllByLabelText(/Model Name/i)[0], { target: { value: 'Updated Model' } });
        fireEvent.click(screen.getByRole('button', { name: Labels.form.UPDATE }));
    
        await waitFor(() => {
            expect(updateRobot).toHaveBeenCalledWith('1', { name: 'Updated Robot', model_name: 'Updated Model' });
            expect(handleClose).toHaveBeenCalled();
        });
    
        expect(asFragment()).toMatchSnapshot();
    });
  });