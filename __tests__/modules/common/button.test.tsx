import React from 'react'
import { render } from 'test-utils';
import Button from 'modules/common/button/button';

describe('Button', () => {
    it('Renders Button Component', () => {
        const { asFragment } = render(<Button />);
        expect(asFragment()).toMatchSnapshot();
    });
});
