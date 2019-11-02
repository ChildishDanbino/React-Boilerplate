import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsAndCategories } from 'redux/modules/products';
import { setSelectedCategory } from 'redux/modules/categories';
import { getTableData, getCategoryCounts } from 'redux/selectors/products';

import Spinner from 'modules/common/spinner/spinner';
import Button from 'modules/common/button/button';

import ProductTable from 'modules/products/components/product-table';

import { ReduxStore } from 'types/store';
import { IProduct } from 'types/product';
import { ICategoryCount } from 'types/categories';

interface IProps {
  categoriesLoaded: boolean;
  categoryNames: string[];
  getCategories: () => void;
  getProducts: () => void;
  tableData: IProduct[];
  productsLoaded: boolean;
  setSelectedCategory: (category: string) => void;
  categories: any;
}

const Layout = styled.div`
  display: flex;
  flex-direction: row;
`;

const SpinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20%;
`;

const Products = () => {
  const dispatch = useDispatch();
  const tableData = useSelector(getTableData);
  const categories = useSelector(getCategoryCounts);
  const categoriesLoaded = useSelector(
    (state: ReduxStore) => state.categories.loaded
  );
  const productsLoaded = useSelector(
    (state: ReduxStore) => state.products.loaded
  );
  const dataLoaded = categoriesLoaded && productsLoaded;

  useEffect(() => {
    dispatch(getProductsAndCategories());
  }, [dispatch]);

  return !dataLoaded ? (
    <SpinnerWrapper>
      <Spinner color="black" large />
    </SpinnerWrapper>
  ) : (
    <div>
      <Layout>
        {categories.map((category: ICategoryCount) => (
          <Button
            onClick={() => dispatch(setSelectedCategory(category.name))}
            key={category.name}
          >
            {category.name} ({category.length})
          </Button>
        ))}
      </Layout>
      <ProductTable products={tableData} />
    </div>
  );
};

export default Products;
