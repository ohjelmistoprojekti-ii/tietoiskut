import React from 'react';
import '@testing-library/jest-dom';
import {BrowserRouter, MemoryRouter} from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import AppWrapper from '../src/App';

// tests/App.test.js
//jest.mock('react-router-dom', () => ({
//  ...jest.requireActual('react-router-dom'),
//  MemoryRouter: ({ children }) => <div>{children}</div>,
//}));

test('renders learn react link', () => {
  render(
      <AppWrapper />
  );
  const linkElement = screen.getByRole('img', { name: /logo/i });
  expect(linkElement).toHaveAttribute('src');
  expect(linkElement.src).toMatch(/^https?:\/\//i);
});

test('renders form correctly', () => {
  render(
      <AppWrapper />
  );
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const submitButton = screen.getByText(/login/i);

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test('displays validation errors when form is submitted with empty fields', () => {
  render(
      <AppWrapper />
  );
  const submitButton = screen.getByText(/login/i);
  fireEvent.click(submitButton);

  const nameError = screen.getByText(/name is required/i);
  const emailError = screen.getByText(/email is required/i);

  expect(nameError).toBeInTheDocument();
  expect(emailError).toBeInTheDocument();
});

test('submits form successfully when both fields are filled out', () => {
  render(
      <AppWrapper />
  );
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const submitButton = screen.getByText(/login/i);

  fireEvent.change(nameInput, { target: { value: 'John Doe' } });
  fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
  fireEvent.click(submitButton);

  const nameError = screen.queryByText(/name is required/i);
  const emailError = screen.queryByText(/email is required/i);

  expect(nameError).not.toBeInTheDocument();
  expect(emailError).not.toBeInTheDocument();
});