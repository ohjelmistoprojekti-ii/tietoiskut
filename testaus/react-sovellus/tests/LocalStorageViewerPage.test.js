import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import LocalStorageViewerPage from '../src/LocalStorageViewerPage';

test('renders LocalStorageViewerPage component', () => {
  render(<LocalStorageViewerPage />);
  const headingElement = screen.getByRole('heading', { name: /local storage viewer page/i });
  expect(headingElement).toBeInTheDocument();
});

test('contains LocalStorageViewer component', () => {
  render(<LocalStorageViewerPage />);
  const viewerElement = screen.getByRole('heading', { name: /local storage viewer/i });
  expect(viewerElement).toBeInTheDocument();
});
