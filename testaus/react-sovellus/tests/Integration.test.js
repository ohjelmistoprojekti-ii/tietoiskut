import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import AppWrapper from '../src/App';
import LocalStorageViewerPage from '../src/LocalStorageViewerPage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

test('integration test for route on button click', () => {
  const mockNavigate = jest.fn();
  useNavigate.mockReturnValue(mockNavigate);

  render(
    <AppWrapper />
  );

  fireEvent.click(screen.getByText(/Login/i));

  // Check if navigate was called with the expected route
  expect(useNavigate).toHaveBeenCalledWith();
});

test('integration test for login form and local storage', () => {
  render(
    <AppWrapper />
  );

  // Fill out the form
  fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: 'john.doe@example.com' } });

  // Submit the form
  fireEvent.click(screen.getByText(/Login/i));

  // Check if local storage is updated
  expect(localStorage.getItem('name')).toBe('John Doe');
  expect(localStorage.getItem('email')).toBe('john.doe@example.com');
});

test('integration test for local storage viewer page', () => {
  render(
    <Router>
      <LocalStorageViewerPage />
    </Router>
  );

  // Check if the local storage viewer page contains the correct information
  expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
  expect(screen.getByText(/john.doe@example.com/i)).toBeInTheDocument();
  localStorage.removeItem('John Doe');
});
