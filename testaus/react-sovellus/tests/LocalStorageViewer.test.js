import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LocalStorageViewer from '../src/LocalStorageViewer';

test('renders LocalStorageViewer component', () => {
  render(<LocalStorageViewer />);
  const headingElement = screen.getByRole('heading', { name: /local storage viewer/i });
  expect(headingElement).toBeInTheDocument();
});

test('displays local storage items', () => {
  localStorage.setItem('testKey', 'testValue');
  render(<LocalStorageViewer />);
  const itemElement = screen.getByText(/testKey: testValue/i);
  expect(itemElement).toBeInTheDocument();
  localStorage.removeItem('testKey');
});
