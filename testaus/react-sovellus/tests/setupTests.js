import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Mock the logo.svg import
jest.mock('../src/logo.svg', () => 'logo.svg');

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

afterEach(() => {
    jest.clearAllMocks();
  }); 