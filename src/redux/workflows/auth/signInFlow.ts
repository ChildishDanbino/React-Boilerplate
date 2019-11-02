import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { types as typesAuth } from 'redux/modules/auth';
import { IAction } from 'types/store';

import LocalStorageService, {
  ACCESS_TOKEN,
  EXPIRE_AT
} from 'services/local-storage';

export default function*({ payload: { username, password } }: IAction) {
  try {
    yield put({ type: typesAuth.SIGN_IN });

    const { status, data } = yield call(
      axios.post,
      'http://www.mocky.io/v2/5c8119be3100003c24771d81?mocky-delay=1.5s',
      { username, password }
    );

    //@ts-ignore
    yield call(LocalStorageService.setItem, ...[ACCESS_TOKEN, data.token]);
    //@ts-ignore
    yield call(LocalStorageService.setItem, ...[EXPIRE_AT, data.expire_at]);

    if (status === 200) {
      yield put({ type: typesAuth.SIGN_IN_SUCCESS, data });
    } else {
      yield put({ type: typesAuth.SIGN_IN_FAIL });
    }
  } catch (e) {
    console.log('ERROR', e);
  }
}
