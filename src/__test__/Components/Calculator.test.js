import React from 'react';
import { create } from 'react-test-renderer';
import Calculator from '../../components/Calculator';

it('Should render correctly', () => {
  const elem = create(<Calculator result="Some value" />);
  expect(elem).toMatchSnapshot();
});
