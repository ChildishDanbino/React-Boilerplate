import { takeLatest } from 'redux-saga/effects';

import signInFlow from 'redux/workflows/auth/signInFlow';
import { types as typesAuth } from 'redux/modules/auth';

export default () => [takeLatest(typesAuth.AUTHORIZE, signInFlow)];
