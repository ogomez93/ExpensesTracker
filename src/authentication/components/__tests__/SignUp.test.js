import React from 'react';
import { shallow } from 'enzyme';

import SignUp from '../SignUp';

describe('SignUp component', () => {
  let wrapper;
  
  beforeAll(() => {
    wrapper = shallow(<SignUp />);
  });

  it('should render', () =>
    expect(wrapper.isEmptyRender()).toEqual(false));

  it('should match the snapshot', () =>
    expect(wrapper).toMatchSnapshot());
});
