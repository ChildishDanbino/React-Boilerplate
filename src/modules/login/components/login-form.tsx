import React from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { withFormik, FormikProps } from 'formik'
import { IFormValues } from 'types/formValues'

import Input from 'modules/login/components/input'
import InputFeedback from 'modules/login/components/input-feedback'
import CommonButton from 'modules/common/button/button'
import Spinner from 'modules/common/spinner/spinner'

interface IProps {
    handleSubmit?: (values: IFormValues) => void
    values?: IFormValues
    handleChange?: (value: string) => void
    errors?: IFormValues
    touched?: IFormValues,
    loading: boolean
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%
`;

const SubmitButton = styled(CommonButton)`
    width: 50%;
    border: none;
    border-radius: 3px;
`;

const LoginForm = ({values, handleChange, handleSubmit, errors, touched, loading }: IProps & FormikProps<IFormValues>) => {
    return (
        <Form onSubmit={handleSubmit}>
            <Input
                id="username"
                value={values.username}
                onChange={handleChange}
                placeholder="NEW BRANCH AWE YEA"
                error={Boolean(errors.username && touched.username)}
            />
            {errors.username && touched.username && <InputFeedback>{errors.username}</InputFeedback>}

            <Input
                id="password"
                value={values.password}
                placeholder="Password"
                type="password"
                onChange={handleChange}
                error={Boolean(errors.password && touched.password)}
            />
            {errors.password && touched.password && <InputFeedback>{errors.password}</InputFeedback>}
            <SubmitButton type="submit">
                { loading ? <Spinner name="circle" /> : 'Submit'  }
            </SubmitButton>
        </Form>
    );
};

export default withFormik<IProps, IFormValues>({
    mapPropsToValues: () => ({ username: '', password: '' }),
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Email is required!'),
        password: Yup.string().required('Password is required!')
    }),
    handleSubmit: (values: IFormValues, formikProps: any) => {
        formikProps.props.handleSubmit(values, formikProps);
    },
    displayName: 'SignInForm'
})(LoginForm);
