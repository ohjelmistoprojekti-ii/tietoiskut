import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LocalStorageViewerPage from '../src/LocalStorageViewerPage';

test('TC-003: renders LocalStorageViewerPage text', () => {
  render(
      <MemoryRouter>
        <LocalStorageViewerPage />
      </MemoryRouter>
  );
  const headingElement = screen.getByRole('heading', { name: /Local Storage Content/i });
  expect(headingElement).toBeInTheDocument();
  const backButton = screen.getByText(/Back to front page/i);
  fireEvent.click(backButton);
});
