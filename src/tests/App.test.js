import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../components/App';

test('renders the App component with navigation links and routes', async () => {
  render(<App />);

  await waitFor(() => {
    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute('href')).toBe('/');
  });
});
