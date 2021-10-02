import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const spanElement = screen.getByText(/Texas ASL/i);
  expect(spanElement).toBeInTheDocument();
});
