import { render } from '@testing-library/react';
import App from './app';
import { expect, test } from 'vitest';

test('renders app', () => {
  render(<App />);
  expect(document.body).toBeTruthy();
});
