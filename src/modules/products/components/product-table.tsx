import React from 'react';
import styled from 'styled-components';
import { IProducts, IProduct } from 'types/product';

const Button = styled.button`
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  padding: 15px;
  font-size: 14px;
`;

const TableWrapper = styled.div`
  margin-top: 30px;
`;

const Table = styled.table``;

const TableRow = styled.tr`
  font-family: Arial;
`;

const TableHeader = styled.th`
  text-align: left;
  font-family: Arial;
`;

const TableData = styled.td`
  min-width: 200px;
`;

const HEADER_DATA = ['Name', 'Description', 'Photo', 'Quantity', 'Buy Now'];

const ProductTable = (props: IProducts) => {
  const { products } = props;

  function renderTableHeader() {
    return HEADER_DATA.map((header, index) => {
      return <TableHeader key={index}>{header.toUpperCase()}</TableHeader>;
    });
  }

  function renderTableData() {
    return (
      products &&
      products.map((product: IProduct) => {
        const { name, description, logo, quantity, id } = product;
        return (
          <TableRow key={id}>
            <TableData>{name}</TableData>
            <TableData>{description}</TableData>
            <TableData>{<img src={logo} alt="product_image" />}</TableData>
            <TableData>{quantity}</TableData>
            <TableData>
              <Button
                onClick={() => window.alert(`You are trying to buy ${name}`)}
              >
                Buy Now
              </Button>
            </TableData>
          </TableRow>
        );
      })
    );
  }

  return products && products.length ? (
    <TableWrapper>
      <Table>
        <tbody>
          <TableRow>{renderTableHeader()}</TableRow>
          {renderTableData()}
        </tbody>
      </Table>
    </TableWrapper>
  ) : null;
};

export default ProductTable;
