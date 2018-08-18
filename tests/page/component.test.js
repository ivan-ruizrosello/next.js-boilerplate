import React from 'react';

import Prueba from './component';
import {shallow} from 'enzyme';

describe('Testing enzyme snapshot components', () => {
  test('Shallow component' , () => {
    const wrapper = shallow(<Prueba />);

    expect(wrapper).toMatchSnapshot();
  })
});