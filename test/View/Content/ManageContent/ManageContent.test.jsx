import React from 'react';
import renderer from 'react-test-renderer';
import ManageContent from '../../../../src/View/Content/ManageContent/ManageContent';

test('ManageContent renders correctly', () => {
  const title = "Conference 2017"
  const id = 1;
  const manage = renderer.create(<ManageContent id={1} title={title} />);
  expect(manage.toJSON()).toMatchSnapshot()
});
