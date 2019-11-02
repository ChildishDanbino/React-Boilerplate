import React from 'react';

/**
 * Basic App Component as a project scales you can add layout components here
 */

const App: React.FC = (props: any) => {
  return <div>{props.children}</div>;
};

export default React.memo(App);
