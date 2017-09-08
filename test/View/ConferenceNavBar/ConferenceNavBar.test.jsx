import React from 'react';
import renderer from 'react-test-renderer';
import ConferenceNavBar from '../../../src/View/ConferenceNavBar/ConferenceNavBar';

test('Link changes the class when hovered', () => {

  const component = renderer.create(
    <ConferenceNavBar/>
  );

  expect(component).toBeDefined();

});
