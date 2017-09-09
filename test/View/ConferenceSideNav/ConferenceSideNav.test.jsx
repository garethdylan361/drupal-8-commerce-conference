import React from 'react';
import renderer from 'react-test-renderer';
import ConferenceSideNav from '../../../src/View/ConferenceSideNav/ConferenceSideNav';

test('ConferenceSideNav renders correctly', () => {
  const sideNav = renderer.create(<ConferenceSideNav/>);
  expect(sideNav).toMatchSnapshot();
});
