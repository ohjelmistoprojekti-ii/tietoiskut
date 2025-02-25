import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import LocalStorageViewer from '../src/LocalStorageViewer';

test('TC-001: renders LocalStorageViewer text', () => {
  render(
      <LocalStorageViewer />
  );
  const headingElement = screen.getByRole('heading', { name: /Local Storage Content/i });
  expect(headingElement).toBeInTheDocument();
});

test('TC-002: displays LocalStorage items', () => {
  localStorage.setItem('John Doe', 'john.doe@example.com');
  render(
      <LocalStorageViewer />
  );

  const keyElement = screen.getByText(/John Doe/i);
  expect(keyElement).toBeInTheDocument();
  const valueElement = screen.getByText(/john.doe@example.com/i);
  expect(valueElement).toBeInTheDocument();
  localStorage.removeItem('John Doe');
});
