import React from 'react';
import { render, screen, waitFor } from '@testing-library/react'; // Import waitFor from testing-library
import App from '../components/App';

test('renders the App component with navigation links and routes', async () => {
  // Render your component
  render(<App />);

  // Use waitFor to wait for the element to appear
  await waitFor(() => {
    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute('href')).toBe('/');
  });
});
