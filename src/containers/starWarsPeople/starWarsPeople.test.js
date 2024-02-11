import React from 'react';
import { render, screen } from '@testing-library/react';
import StarWarsPeople from './index';

test('verify render select button', () => {
  const loaderElement = screen.getByTestId('test-loader');
  expect(loaderElement).toBeInTheDocument();
});

