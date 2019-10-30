import React from 'react';
import { render, fireEvent } from 'test-utils'
import '@testing-library/jest-dom/extend-expect';
import ProductTable from 'modules/products/components/product-table';

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

        const { asFragment } = render(<ProductTable products={mockProductData} />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('Renders null when no products', () => {
        const { queryByTestId } = render(<ProductTable products={[]} />);
        expect(queryByTestId('buy-now')).toBeNull()
    });

    it('Alerts the user when Buy Now Clicked', () => {
        window.alert = jest.fn();
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

        const { getByText } = render(<ProductTable products={mockProductData} />);
        expect(getByText('Buy Now')).toBeInTheDocument();
        fireEvent.click(getByText("Buy Now"));
        //@ts-ignore
        expect(window.alert.mock.calls.length).toBe(1);
    });
});
