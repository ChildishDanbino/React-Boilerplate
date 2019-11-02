import styled from 'styled-components';

interface IProps {
  error: boolean;
}

const Input = styled.input`
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: ${({ error }: IProps) => (error ? '1px solid white' : 0)};
  margin: ${({ error }: IProps) => (error ? 0 : '0 0 15px')};
  padding: 15px;
  font-size: 14px;
`;

export default Input;
