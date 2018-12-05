import React from 'react';
import { shallow } from 'enzyme';

import Home from '../Home';

describe('Home component', () => {
  let wrapper;
  
  beforeAll(() => {
    wrapper = shallow(<Home />);
  });

  it('should render', () =>
    expect(wrapper.isEmptyRender()).toEqual(false));

  it('should match the snapshot', () =>
    expect(wrapper).toMatchSnapshot());
});
