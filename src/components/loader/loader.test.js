import React from 'react';
import { render } from '@testing-library/react';
import Loader from './index';

test('renders loader component', () => {
  const { getByTestId } = render(<Loader />);
  const loaderElement = getByTestId('test-loader');
  expect(loaderElement).toBeInTheDocument();
});

