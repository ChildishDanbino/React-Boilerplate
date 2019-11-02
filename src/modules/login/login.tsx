import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { authorize } from 'redux/modules/auth';

import logo from 'assets/background.jpg';
import LoginForm from 'modules/login/components/login-form';
import { IFormValues } from 'types/formValues';
import { ReduxStore } from 'types/store';

const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(500px, 35%) auto;
  width: 100%;
  height: 100vh;
  background-color: #040111;
`;

const FormLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${logo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Header = styled.h2`
  color: white;
  font-family: Oswald, sans-serif;
`;

class Login extends PureComponent<any, any> {
  handleSubmit = (values: IFormValues) => {
    this.props.authorize(values);
  };

  render() {
    const { loading } = this.props;

    return (
      <Layout>
        <FormLayout>
          <Header>Sign In</Header>
          <LoginForm loading={loading} handleSubmit={this.handleSubmit} />
        </FormLayout>

        <ImageColumn />
      </Layout>
    );
  }
}

const mapStateToProps = (state: ReduxStore) => {
  return {
    loading: state.auth.loading
  };
};

export default connect(
  mapStateToProps,
  {
    authorize
  }
)(Login);
