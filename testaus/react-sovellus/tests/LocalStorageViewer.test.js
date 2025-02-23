import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LocalStorageViewer from '../src/LocalStorageViewer';

test('renders LocalStorageViewer component', () => {
  render(<LocalStorageViewer />);
  const headingElement = screen.getByRole('heading', { name: /Local Storage Content/i });
  expect(headingElement).toBeInTheDocument();
});

test('displays local storage items', () => {
  localStorage.setItem('testKey', 'testValue');
  render(<LocalStorageViewer />);
  const keyElement = screen.getByText(/testKey:/i);
  expect(keyElement).toBeInTheDocument();
  const itemElement = screen.getByText(/testValue/i);
  expect(itemElement).toBeInTheDocument();
  localStorage.removeItem('testKey');
});
