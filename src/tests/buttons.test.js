import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../components/buttons';

test('renders a button with children', () => {
  render(<Button onClick={() => {}}>Click me</Button>);
  const buttonElement = screen.getByText('Click me');
  expect(buttonElement).toBeInTheDocument();
});

test('calls the onClick function when the button is clicked', () => {
  const onClickMock = jest.fn();
  render(<Button onClick={onClickMock}>Click me</Button>);
  const buttonElement = screen.getByText('Click me');

  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalledTimes(1);
});

test('passes children as an argument to the onClick function', () => {
  const onClickMock = jest.fn();
  render(<Button onClick={onClickMock}>Click me</Button>);
  const buttonElement = screen.getByText('Click me');

  fireEvent.click(buttonElement);
  expect(onClickMock).toHaveBeenCalledWith('Click me');
});

test('renders with custom id and className', () => {
  render(
    <Button onClick={() => {}} id="custom-button" className="custom">
      Custom Button
    </Button>
  );
  const buttonElement = screen.getByText('Custom Button');
  expect(buttonElement).toHaveAttribute('id', 'custom-button');
  expect(buttonElement).toHaveClass('custom');
});
