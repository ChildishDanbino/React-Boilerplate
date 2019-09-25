import React from 'react';
import { shallow } from 'enzyme';
import ProductTable from '../../../../src/modules/products/components/product-table';

describe('ProductTable', () => {
    it('Renders ProductTable Componnent when valid data passed', () => {
        const mockProductData = [
            {
                "category": 1,
                "description": "With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship.",
                "id": 734,
                "logo": "https://via.placeholder.com/64",
                "name": "Bio-ove",
                "quantity": 13
            },
        ];

        const wrapper = shallow(<ProductTable products={mockProductData} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('Renders null when no products', () => {
        const wrapper = shallow(<ProductTable products={[]} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('#buy-button').length).toEqual(0);
    });

    it('Alerts the user when Buy Now Clicked', () => {
        const mockProductData = [
            {
                "category": 1,
                "description": "With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship.",
                "id": 734,
                "logo": "https://via.placeholder.com/64",
                "name": "Bio-ove",
                "quantity": 13
            },
        ];

        const wrapper = shallow(<ProductTable products={mockProductData} />);
        expect(wrapper.find('#buy-button').length).toEqual(1);
        //@ts-ignore
        wrapper.instance().onClick = jest.fn();
        wrapper.find('#buy-button').simulate('click');
        //@ts-ignore
        expect(wrapper.instance().onClick.mock.calls.length).toBe(1);
    });
});
