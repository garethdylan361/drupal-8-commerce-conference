import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from '../../../src/View/Dashboard/Dashboard';

test('Dashboard should render', () => {
  const dashboard = renderer.create(<Dashboard/>);
  expect(dashboard).toMatchSnapshot();
});
