import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import MissionForm from '../../../src/components/forms/MissionForm';
import { createMission, updateMission, fetchMissionById, fetchRobots } from '../../../src/services/api';
import Labels from '../../../src/components/common/labels';

jest.mock('../../../src/services/api');

describe('MissionForm', () => {
  const missionId = 1;
  const missionData = { name: 'Test Mission', description: 'Test Description', robot_id: '1' };
  const robotsData = [{ id: '1', name: 'Robot 1' }, { id: '2', name: 'Robot 2' }];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders form for creating a new mission', async () => {
    fetchRobots.mockResolvedValue({ data: robotsData });

    const { asFragment } = render(<MissionForm onClose={() => {}} onMissionUpdate={() => {}} />);

    // Wait for robots to be fetched and check if they are in the dropdown
    await waitFor(() => expect(screen.getByText(/Robot 1/i)).toBeInTheDocument());

    // Verify the rendered output using snapshot
    expect(asFragment()).toMatchSnapshot();
  });

  test('renders form for updating an existing mission', async () => {
    fetchMissionById.mockResolvedValue({ data: missionData });
    fetchRobots.mockResolvedValue({ data: robotsData });

    const { asFragment } = render(<MissionForm missionId={missionId} onClose={() => {}} onMissionUpdate={() => {}} />);

    // Wait for mission data to be fetched and form fields to be populated
    await waitFor(() => {
      expect(screen.getByDisplayValue(/Test Mission/i)).toBeInTheDocument();
      expect(screen.getByDisplayValue(/Test Description/i)).toBeInTheDocument();
      expect(screen.getByDisplayValue(/1/i)).toBeInTheDocument();
    });

    // Verify the rendered output using snapshot
    expect(asFragment()).toMatchSnapshot();
  });

  test('submits the form to update an existing mission', async () => {
    fetchMissionById.mockResolvedValue({ data: missionData });
    fetchRobots.mockResolvedValue({ data: robotsData });
    updateMission.mockResolvedValue({});

    const onMissionUpdate = jest.fn();
    const onClose = jest.fn();

    render(<MissionForm missionId={missionId} onClose={onClose} onMissionUpdate={onMissionUpdate} />);

    // Wait for mission data to be fetched and form fields to be populated
    await waitFor(() => {
      expect(screen.getByDisplayValue(missionData.name)).toBeInTheDocument();
      expect(screen.getByDisplayValue(missionData.description)).toBeInTheDocument();
    });

    // Update the form fields
    fireEvent.change(screen.getByLabelText(Labels.mission.NAME), { target: { value: 'Updated Mission' } });
    fireEvent.change(screen.getByLabelText(Labels.mission.DESCRIPTION), { target: { value: 'Updated Description' } });

    // Submit the form
    fireEvent.click(screen.getByText(Labels.form.UPDATE));

    // Wait for the updateMission API call
    await waitFor(() => expect(updateMission).toHaveBeenCalledWith(missionId, {
      name: 'Updated Mission',
      description: 'Updated Description',
      robot_id: missionData.robot_id
    }));

    // Check if the callbacks were called
    expect(onMissionUpdate).toHaveBeenCalled();
    expect(onClose).toHaveBeenCalled();
  });


  
  test('handles cancel button click', () => {
    const onClose = jest.fn();

    render(<MissionForm onClose={onClose} onMissionUpdate={() => {}} />);

    // Click the cancel button
    fireEvent.click(screen.getByText(/Cancel/i));

    // Check if the onClose callback was called
    expect(onClose).toHaveBeenCalled();
  });
});
