import React from 'react';

const renderMergedProps = (component: any, ...rest: any[]) => {
    const finalProps = Object.assign({}, ...rest);
    return React.createElement(component, finalProps);
};

export default renderMergedProps;
