import React from 'react';
import { render, screen, act } from '@testing-library/react';
import QuoteDisplay from '../components/QuoteDisplay';

test('renders loading message initially', () => {
  act(() => {
    render(<QuoteDisplay />);
  });
  const loadingElement = screen.getByText(/Loading/i);
  expect(loadingElement).toBeInTheDocument();
});

test('renders error message when there is an error', async () => {
  // Mock a network error by providing an invalid API key
  jest
    .spyOn(global, 'fetch')
    .mockRejectedValueOnce(new Error('Failed to fetch data'));

  await act(async () => {
    render(<QuoteDisplay />);
  });

  const errorElement = screen.getByText(/Error/i);
  expect(errorElement).toBeInTheDocument();
});

test('renders quote and author when data is loaded', async () => {
  // Mock a successful API response
  const mockApiResponse = [
    {
      quote: 'Test Quote',
      author: 'Test Author',
    },
  ];

  jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    ok: true,
    json: async () => mockApiResponse,
  });

  await act(async () => {
    render(<QuoteDisplay />);
  });

  // Wait for the component to load
  const quoteElement = screen.getByText('Test Quote');
  const authorElement = screen.getByText('Test Author');

  expect(quoteElement).toBeInTheDocument();
  expect(authorElement).toBeInTheDocument();
});

test('renders "Quote of the Day" as the header', async () => {
  const mockApiResponse = [
    {
      quote: 'Test Quote',
      author: 'Test Author',
    },
  ];

  jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    ok: true,
    json: async () => mockApiResponse,
  });

  await act(async () => {
    render(<QuoteDisplay />);
  });

  const headerElement = screen.getByText('Quote of the Day');

  expect(headerElement).toBeInTheDocument();
});
