import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { getProducts } from 'redux/modules/products'
import { getCategories, setSelectedCategory } from 'redux/modules/categories'
import { getTableData, getCategoryCounts } from 'redux/selectors/products'

import Spinner from 'modules/common/spinner/spinner'
import Button from 'modules/common/button/button'

import ProductTable from 'modules/products/components/product-table'
import { getActiveCategory, getCategoryNames } from 'redux/selectors/categories';

import { ReduxStore } from 'types/store'
import { IProduct } from 'types/product'
import { ICategory } from 'types/categories'

interface IProps {
    categoriesLoaded: boolean
    categoryNames: string[]
    getCategories: () => void
    getProducts: () => void
    tableData: IProduct[]
    productsLoaded: boolean
    setSelectedCategory: ((category: string) => void)
    categories: any
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

class Products extends PureComponent<IProps, {}> {
    componentDidMount() {
        this.props.getProducts();
        this.props.getCategories();
    }

    setActiveCategory = (category: string) => {
        this.props.setSelectedCategory(category)
    };

    render() {
        const { tableData, categoriesLoaded, productsLoaded, categories } = this.props;
        const dataLoaded = categoriesLoaded && productsLoaded;

        return !dataLoaded ?
            <SpinnerWrapper>
                <Spinner
                    color="black"
                    large
                />
            </SpinnerWrapper> : (
                <div>
                    <Layout>
                        {categories.map((category: ICategory) =>
                            <Button
                                onClick={() => this.setActiveCategory(category.name)}
                                key={category.name}
                            >
                                {category.name} ({category.length})
                            </Button>
                        )}
                    </Layout>
                    <ProductTable products={tableData}/>
                </div>
            );
    };
}

const mapStateToProps = (state: ReduxStore) => {
    return {
        activeCategory: getActiveCategory(state),
        categoriesLoaded: state.categories.loaded,
        categoryNames: getCategoryNames(state),
        tableData: getTableData(state),
        productsLoaded: state.products.loaded,
        categories: getCategoryCounts(state)
    }
};

export default connect(mapStateToProps, {
    getProducts,
    getCategories,
    setSelectedCategory
})(Products)
