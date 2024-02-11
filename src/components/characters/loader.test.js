import React from 'react';
import { render } from '@testing-library/react';
import Characters from './index';

test('test characters input', () => {     
  const chars = [
    {
      id: 1,
      name: 'Luke Skywalker',
      gender: 'male',
      mass: '77',
      height: '172',
      homeworld: 'Tatooine'
    }
  ];

  const { getByText } = render(<Characters chars={chars} />);

  chars.forEach((chars) => {
    expect(getByText(chars.name)).toBeInTheDocument();
    expect(getByText(chars.homeworld)).toBeInTheDocument();
    expect(getByText('HEIGHT - '+chars.height)).toBeInTheDocument();
    expect(getByText('MASS - '+chars.mass)).toBeInTheDocument();
    expect(getByText('GENDER - '+chars.gender)).toBeInTheDocument();
  });
});

