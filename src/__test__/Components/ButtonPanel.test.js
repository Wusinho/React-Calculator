import React from 'react';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom';
import ButtonPanel from '../../components/ButtonPanel';

it('Should render', () => {
  const elem = create(<ButtonPanel clickHandler={() => 'e'} />);
  expect(elem).toMatchSnapshot();
});
