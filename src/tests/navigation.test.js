import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from '../components/App';

test('renders the Header component with navigation links', () => {
  render(
    <BrowserRouter>
      {' '}
      {/* Ensure there is only one BrowserRouter */}
      <Header />
    </BrowserRouter>,
  );
});
