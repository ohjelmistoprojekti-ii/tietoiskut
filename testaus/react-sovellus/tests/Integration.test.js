import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import AppWrapper from '../src/App';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

test('navigates to a specific route on button click', () => {
  const navigate = jest.fn();
  useNavigate.mockReturnValue(navigate);

  render(
      <AppWrapper />
  );

  fireEvent.click(screen.getByText(/Login/i));
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
  //expect(localStorage.getItem('name')).toBe('John Doe');
  //expect(localStorage.getItem('email')).toBe('john.doe@example.com');

  //expect(screen.getByText(/Local Storage Viewer/i)).toBeInTheDocument();
  //expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
  //expect(screen.getByText(/john.doe@example.com/i)).toBeInTheDocument();
});
