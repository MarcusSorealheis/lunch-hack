//Project Specific Imports
import React from 'react';
import { shallow} from 'enzyme';
import {expect} from 'chai';
//Component Specific Imports
import Intro from '../../app/components/Intro';

describe('<Intro />', () => {
  it('renders one <Intro /> component', () => {
    const wrapper = shallow(<Intro />);
    expect(wrapper.find(".row")).to.have.length(1);
  });

});
