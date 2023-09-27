import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

test('renders the Home component with content', () => {
  render(<Home />);

  expect(screen.getByText((content, element) => element.tagName.toLowerCase() === 'p' && content.includes('The Math App was designed with one primary goal in mind: simplicity'))).toBeInTheDocument();
});
