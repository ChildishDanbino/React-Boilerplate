import React from 'react';
import SpinKit from 'react-spinkit';

import styled from 'styled-components';

const LargeSpinner = styled(SpinKit)`
  transform: scale(4);
`;

interface IProps {
  color: string;
  name: string | any;
  large?: boolean;
}

const Spinner = (props: IProps) => {
  const Spinner = props.large ? LargeSpinner : SpinKit;

  return <Spinner color={props.color} name={props.name} />;
};

Spinner.defaultProps = {
  name: 'cube-grid',
  color: 'white',
  number: 1
};

export default Spinner;
