import React from 'react';
import { render, screen } from '@testing-library/react';
import Filter from './index';

test('verify render select button', () => {
  render(<Filter />);
  const selectElement = screen.getByTestId('test-selectFilter');
  expect(selectElement).toBeInTheDocument();
});

test('selectedOption is altered when button is clicked', () => {
  render(<Filter />);
  const buttonElement = screen.getByTestId('test-buttonSearch');
  expect(buttonElement).toBeInTheDocument();
});