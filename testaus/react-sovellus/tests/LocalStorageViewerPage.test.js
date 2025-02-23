import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LocalStorageViewerPage from '../src/LocalStorageViewerPage';

test('renders LocalStorageViewerPage component', () => {
  render(
    <MemoryRouter>
        <LocalStorageViewerPage />
    </MemoryRouter>
);
  const headingElement = screen.getByRole('heading', { name: /Local Storage Content/i });
  expect(headingElement).toBeInTheDocument();
});
