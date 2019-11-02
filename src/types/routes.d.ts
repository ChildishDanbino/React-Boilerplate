import { RouteComponentProps } from 'react-router-dom';

export interface IRoute extends RouteComponentProps {
  component: any;
  isAuthenticated: boolean;
  path: string;
}
