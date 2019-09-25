import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../../src/modules/common/button/button';

describe('Button', () => {
    it('Renders Button Componnent', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper).toMatchSnapshot();
    });
});
