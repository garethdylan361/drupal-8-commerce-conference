import React from 'react';
import renderer from 'react-test-renderer';
import ConferenceNavBar from '../../../src/View/ConferenceNavBar/ConferenceNavBar';

test('ConferenceNavBar should render', () => {
  const navBar = renderer.create(<ConferenceNavBar/>);
  expect(navBar).toMatchSnapshot();
});
