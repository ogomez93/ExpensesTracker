import React from 'react';
import { shallow } from 'enzyme';

import LogIn from '../LogIn';

describe('LogIn component', () => {
  let wrapper;
  
  beforeAll(() => {
    wrapper = shallow(<LogIn />);
  });

  it('should render', () =>
    expect(wrapper.isEmptyRender()).toEqual(false));

  it('should match the snapshot', () =>
    expect(wrapper).toMatchSnapshot());
});
