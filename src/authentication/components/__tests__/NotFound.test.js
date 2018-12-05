import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../NotFound';

describe('NotFound component', () => {
  let wrapper;
  
  beforeAll(() => {
    wrapper = shallow(<NotFound />);
  });

  it('should render', () =>
    expect(wrapper.isEmptyRender()).toEqual(false));

  it('should match the snapshot', () =>
    expect(wrapper).toMatchSnapshot());
});
